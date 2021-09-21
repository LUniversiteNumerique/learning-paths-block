<?php

/**
 * Plugin Name: Learning Paths Client
 *
 * @author            Pierre Duverneix
 * @copyright         2021 Fondation UNIT
 * @license           GPL-2.0-or-later
 * Plugin URI:        https://example.com/plugin-name
 * Description:       Wordpress block displaying the learning paths from the API of L'Université Numérique
 * Version:           1.0.0
 * Text Domain:       learningpathsclient
 *
 * @package           learningpathsclient
 */

function learningpathsclient_register_block() {
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'dist/block.asset.php');

    wp_register_script(
        'learningpathsclient',
        plugins_url( 'dist/block.js', __FILE__ ),
        $asset_file['dependencies'],
		$asset_file['version']
    );
 
    register_block_type( 'learningpathsclient/block', array(
        'editor_script' => 'learningpathsclient',
    ) );
 
}
add_action( 'init', 'learningpathsclient_register_block' );


