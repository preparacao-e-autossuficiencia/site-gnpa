<?php
/**
 * Render the block content.
 *
 * @package gnpa
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$attributes = $attributes ?? array();

$heading       = $attributes['heading'] ?? '';
$content       = $content ?? '';
$cta_link      = $attributes['cta_link'] ?? array(
	'url' => '',
	'text' => '',
);
$image         = $attributes['image'] ?? '';
?>

<section <?php echo wp_kses_post( get_block_wrapper_attributes() ); ?>>
	<div class="container">
		<div class="content">
			<?php if ( $heading ) : ?>
				<h2 class="heading-2"><?php echo esc_html( $heading ); ?></h2>
			<?php endif; ?>

			<?php if ( $content ) : ?>
				<div class="inner-demo">//todo: fazer o fix a esta div
					<?php echo wp_kses_post( $content ); ?>
				</div>
			<?php endif; ?>

			<?php if ( ! empty( $cta_link['text'] ) ) : ?>
				<a class="cta-button cta-button--secondary" href="<?php echo esc_url( $cta_link['url'] ?? '#' ); ?>">
					<?php echo esc_html( $cta_link['text'] ); ?>
				</a>
				<?php endif; ?>
		</div>
	</div>

	<?php if ( $image ) : ?>
		<div class="feature-section-image-side--left" style="background-image: url('<?php echo esc_url( $image ); ?>');"></div>
	<?php endif; ?>
</section>
