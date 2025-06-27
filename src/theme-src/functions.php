<?php
/**
 * Functions.php
 *
 * @package gnpa-theme
 * @since 0.0.1
 */

add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_style(
			'gnpa-theme-styles',
			get_template_directory_uri() . '/assets/styles/styles.css',
			array(),
			filemtime( get_template_directory() . '/assets/styles/styles.css' )
		);
	}
);
