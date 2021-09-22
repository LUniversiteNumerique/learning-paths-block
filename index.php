<?php

/**
 * Plugin Name: Learning Paths Block
 *
 * @author            Pierre Duverneix
 * @copyright         2021 Fondation UNIT
 * @license           GPL-2.0-or-later
 * Plugin URI:        https://example.com/plugin-name
 * Description:       Wordpress block displaying the learning paths from the API of L'Université Numérique
 * Version:           1.0.0
 * Text Domain:       learningpathsblock
 *
 * @package           learningpathsblock
 */

function learningpathsblock_register_block() {
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/block.asset.php');

    wp_register_script(
        'learningpathsblock',
        plugins_url('build/block.js', __FILE__),
        $asset_file['dependencies'],
		$asset_file['version']
    );
 
    register_block_type( 'learningpaths/block', array(
        'editor_script' => 'learningpathsblock'
    ));
}

add_action('init', 'learningpathsblock_register_block');
