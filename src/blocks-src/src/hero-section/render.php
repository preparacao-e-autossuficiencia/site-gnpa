<?php
/**
 * Render the block content.
 *
 * @package gnpa
 */

$attributes = $attributes ?? array();

$lede       = $attributes['lede'] ?? '';
$heading    = $attributes['heading'] ?? '';
$description = $attributes['description'] ?? '';
$cta_link       = $attributes['cta_link'] ?? array(
	'url' => '',
	'text' => '',
);
$image      = $attributes['image'] ?? '';

?>

<section <?php echo wp_kses_post( get_block_wrapper_attributes( array( 'class' => 'hero-section' ) ) ); ?>>
	<div class="container">
		<div class="content">
			<?php if ( $lede ) : ?>
				<p class="lede"><?php echo esc_html( $lede ); ?></p>
			<?php endif; ?>

			<?php if ( $heading ) : ?>
				<h1 class="heading"><?php echo esc_html( $heading ); ?></h1>
			<?php endif; ?>

			<?php if ( $description ) : ?>
				<p class="description"><?php echo nl2br( esc_html( $description ) ); ?></p>
			<?php endif; ?>

			<?php if ( ! empty( $cta_link['text'] ) ) : ?>
				<a class="cta-button" href="<?php echo esc_url( $cta_link['url'] ?? '#' ); ?>">
					<?php echo esc_html( $cta_link['text'] ); ?>
				</a>
			<?php endif; ?>
		</div>
	</div>

	<?php if ( $image ) : ?>
		<div class="image-side" style="background-image: url('<?php echo esc_url( $image ); ?>');"></div>
	<?php endif; ?>
</section>
