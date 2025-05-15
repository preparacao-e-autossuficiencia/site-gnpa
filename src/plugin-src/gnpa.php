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
 * Description:       Plugin para o site da GNPA.
 * Version:           0.0.1
 * Requires at least: 6.7
 * Requires PHP:      8.4
 * Author:            Hakira Shymuy
 * Author URI:        https://github.com/Hakira-Shymuy
 * Text Domain:       gnpa-td
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
