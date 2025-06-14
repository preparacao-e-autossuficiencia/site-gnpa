<?php
/**
 * GNPA
 *
 * @package           GNPA
 * @author            Hakira Shymuy
 * @copyright         2025 GNPA
 *
 * Plugin Name:       GNPA
 * Plugin URI:        https://preparacaoeautossuficiencia.pt
 * Description:       Plugin para o site do GNPA.
 * Version:           0.0.1
 * Requires at least: 6.7
 * Requires PHP:      8.4
 * Author:            Hakira Shymuy
 * Author URI:        https://github.com/Hakira-Shymuy
 * Text Domain:       gnpa
 * License:           GPL v3 or later
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.txt
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Define plugin directories and urls.
 */
define( 'GNPA_PLUGIN_FILE', __FILE__ );
define( 'GNPA_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'GNPA_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

function gnpa_blocks_init(): void {
	$blocks_dir = GNPA_PLUGIN_DIR . 'dist/blocks';
	$manifest_path = $blocks_dir . '/blocks-manifest.php';

	// WordPress 6.8+
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( $blocks_dir, $manifest_path );
		return;
	}

	// WordPress 6.7 fallback
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( $blocks_dir, $manifest_path );
	}

	// Manual fallback
	if ( file_exists( $manifest_path ) ) {
		$blocks_manifest = require $manifest_path;
		foreach ( array_keys( $blocks_manifest ) as $block_type ) {
			register_block_type( $blocks_dir . '/' . $block_type );
		}
	}
}
add_action( 'init', 'gnpa_blocks_init' );