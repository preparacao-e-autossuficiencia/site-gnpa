<?php
/**
 * Render the block content.
 *
 * @package gnpa
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$attributes = $attributes ?? array();

$heading = $attributes['heading'] ?? '';
$description = $attributes['description'] ?? '';
$second_description = $attributes['second_description'] ?? '';
$events_count = $attributes['events_count'] ?? 2;
$grid_columns = 2 === $events_count ? 'events-grid--two' : 'events-grid--multi';

$events_query = new WP_Query(
	array(
		'post_type' => 'eventos',
		'posts_per_page' => $events_count,
		'post_status' => 'publish',
		'orderby' => 'date',
		'order' => 'DESC',
	)
);

?>


<section <?php echo wp_kses_post( get_block_wrapper_attributes() ); ?>>
	<div class="container">
		<?php if ( $heading ) : ?>
			<h2><?php echo esc_html( $heading ); ?></h2>
		<?php endif; ?>

		<?php if ( $description ) : ?>
			<p><?php echo esc_html( $description ); ?></p>
		<?php endif; ?>

		<?php if ( $second_description ) : ?>
			<p><?php echo esc_html( $second_description ); ?></p>
		<?php endif; ?>

		<?php if ( ! $events_query->have_posts() ) : ?>
			<p>Não existem eventos</p>
		<?php endif; ?>

		<div class="grid <?php echo esc_attr( $grid_columns ); ?>">
			<?php
			while ( $events_query->have_posts() ) :
				$events_query->the_post();
				?>
				<div class="event-card">
					<?php if ( has_post_thumbnail() ) : ?>
						<figure class="event-card__media">
							<?php
							the_post_thumbnail(
								'full',
								array(
									'alt' => get_the_title(),
									'class' => 'event-card__image',
									'loading' => 'lazy',
									'decoding' => 'async',
									'fetchpriority' => 'low',
								)
							);
							?>
						</figure>
					<?php endif; ?>

					<div class="event-card__body">
						<?php if ( get_the_title() ) : ?>
							<h3><?php the_title(); ?></h3>
						<?php endif; ?>

						<?php if ( get_the_excerpt() ) : ?>
							<p><?php the_excerpt(); ?></p>
						<?php endif; ?>

						<?php if ( get_field( 'evento_data_inicio' ) ) : ?>
							<p><?php the_field( 'evento_data_inicio' ); ?></p>
						<?php endif; ?>

						<?php if ( get_field( 'evento_local' ) ) : ?>
							<p><?php the_field( 'evento_local' ); ?></p>
						<?php endif; ?>
					</div>
					<div class="event-card__footer">
						<a href="<?php the_permalink(); ?>" class="button button--primary">
							<?php esc_html_e( 'Saiba mais', 'gnpa' ); ?>
						</a>
					</div>
				</div>
			<?php endwhile; ?>
		</div>
		<?php wp_reset_postdata(); ?>
	</div>

</section>
