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
$button       = $attributes['link'] ?? array(
	'url' => '',
	'text' => '',
);
$image      = $attributes['image'] ?? '';
?>

<section <?php echo get_block_wrapper_attributes( array( 'class' => 'feature-section' ) ); ?>>
	<div class="container">
		<div class="content">
			<?php if ( $lede ) : ?>
				<span class="lede"><?php echo esc_html( $lede ); ?></span>
			<?php endif; ?>

			<?php if ( $heading ) : ?>
				<h2 class="heading"><?php echo nl2br( esc_html( $heading ) ); ?></h2>
			<?php endif; ?>

			<?php if ( $description ) : ?>
				<p class="text"><?php echo nl2br( esc_html( $description ) ); ?></p>
			<?php endif; ?>

			<?php if ( ! empty( $button['text'] ) ) : ?>
				<a class="button" href="<?php echo esc_url( $link['url'] ?? '#' ); ?>">
					<?php echo esc_html( $link['text'] ); ?>
				</a>
			<?php endif; ?>
		</div>
	</div>

	<?php if ( $image ) : ?>
		<div class="image-side" style="background-image: url('<?php echo esc_url( $image ); ?>');"></div>
	<?php endif; ?>
</section>
