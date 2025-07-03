<?php
/**
 * Render the block content.
 *
 * @package gnpa
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

?>
<?php
$events_query = new WP_Query(
	array(
		'post_type' => 'eventos',
		'posts_per_page' => 2,
		'post_status' => 'publish',
		'orderby' => 'date',
		'order' => 'DESC',
	)
);
?>

<section <?php echo wp_kses_post( get_block_wrapper_attributes() ); ?>>
	<div class="container">
		<?php if ( ! $events_query->have_posts() ) : ?>
			<p>Não existem eventos</p>
		<?php endif; ?>

		<?php
		while ( $events_query->have_posts() ) :
			$events_query->the_post();
			?>
			<div class="event-card">
				<h2><?php the_title(); ?></h2>
			</div>
		<?php endwhile; ?>
		<?php wp_reset_postdata(); ?>
	</div>

</section>
