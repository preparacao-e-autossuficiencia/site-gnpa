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

		<?php
		while ( $events_query->have_posts() ) :
			$events_query->the_post();
			?>
			<div class="event-card">
				<?php if ( get_the_title() ) : ?>
					<h2><?php the_title(); ?></h2>
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
		<?php endwhile; ?>
		<?php wp_reset_postdata(); ?>
	</div>

</section>
