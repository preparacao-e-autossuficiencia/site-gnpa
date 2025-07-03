<?php
/**
 * Functions.php
 *
 * @package gnpa-theme
 * @since 0.0.1
 */

/**
 * Define theme style path
 */
define( 'GNPA_THEME_STYLE_PATH', '/assets/styles/styles.css' );

/**
 * Enqueue theme styles
 */
function enqueue_gnpa_theme_styles() {
	$style_uri  = get_template_directory_uri() . GNPA_THEME_STYLE_PATH;
	$style_file = get_template_directory() . GNPA_THEME_STYLE_PATH;

	wp_enqueue_style(
		'gnpa-theme-styles',
		$style_uri,
		array(),
		filemtime( $style_file )
	);
}

add_action( 'wp_enqueue_scripts', 'enqueue_gnpa_theme_styles' );
add_action(
	'after_setup_theme',
	function () {
		add_theme_support( 'editor-styles' );
		add_editor_style( GNPA_THEME_STYLE_PATH );
	}
);
