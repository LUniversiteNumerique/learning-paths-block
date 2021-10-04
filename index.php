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

const LEARNINGPATHSBLOCK_DIR = '/learning-paths-block/build/';

function learningpathsblock_register_block() {
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.bundle.asset.php');

    wp_register_script(
        'learningpathsblock',
        plugins_url('build/index.bundle.js', __FILE__),
        $asset_file['dependencies'],
		$asset_file['version']
    );

    register_block_type('learningpaths/block', array(
        'editor_script' => 'learningpathsblock'
    ));
}

add_action('init', 'learningpathsblock_register_block');

function learningpathsblock_frontend_scripts() {
    $css_file = plugins_url() . LEARNINGPATHSBLOCK_DIR . 'styles.css';
    wp_enqueue_style('learningpathsblock-styles', $css_file);
    $script_file = plugins_url() . LEARNINGPATHSBLOCK_DIR . 'frontend.bundle.js';
    wp_enqueue_script(
        'learningpathsblock-frontend', 
        $script_file,
        ['wp-element'],
        null,
        true
    );
}

add_action('enqueue_block_assets', 'learningpathsblock_frontend_scripts');
