<?php
/**
 * Render the block content.
 *
 * @package __NAMESPACE__
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

?>
<p <?php echo wp_kses_post( get_block_wrapper_attributes() ); ?>>
	<?php esc_html_e( 'Example Dynamic – hello from a dynamic block!', '__NAMESPACE__' ); ?>
</p>
