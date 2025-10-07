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

    wp_localize_script(
        'learningpathsblock',
        'LEARNINGPATHBLOCK',
        ['apiurl' => get_option('learningpathsblock_apiurl', '')]
    );

    register_block_type('learningpaths/block', array(
        'editor_script' => 'learningpathsblock'
    ));
}

add_action('init', 'learningpathsblock_register_block');

function learningpathsblock_frontend_scripts() {
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.bundle.asset.php');
    $css_file = plugins_url() . LEARNINGPATHSBLOCK_DIR . 'styles.css';
    wp_enqueue_style('learningpathsblock-styles', $css_file);

    $script_file = plugins_url() . LEARNINGPATHSBLOCK_DIR . 'frontend.bundle.js';
    wp_register_script(
        'learningpathsblock-frontend',
        $script_file,
        $asset_file['dependencies'],
        $asset_file['version']
    );
    wp_localize_script(
        'learningpathsblock-frontend',
        'LEARNINGPATHBLOCK',
        ['apiurl' => get_option('learningpathsblock_apiurl', '')]
    );
    wp_enqueue_script(
        'learningpathsblock-frontend', 
        $script_file,
        ['wp-element'],
        null,
        true
    );
}

add_action('enqueue_block_assets', 'learningpathsblock_frontend_scripts');

// Settings
register_setting('learningpathsblock_option-group', 'learningpathsblock_apiurl');

add_action('admin_menu', 'learningpathsblock_admin_menu');

function learningpathsblock_admin_menu() {
	add_options_page(__('Learning Paths Block', 'learningpathsblock'), 'Learning Paths Block', 'manage_options', basename(__FILE__), 'learningpathsblock_options');
}

function learningpathsblock_options() {
	if (!current_user_can('manage_options'))  {
		wp_die( __('You do not have sufficient permissions to access this page.') );
	}

	print '<form method="post" action="options.php" id="learningpathsblock_form">';
	wp_nonce_field('update-options', '_wpnonce');
    settings_fields('learningpathsblock_option-group');

    print '<div class="wrap">';
    print '<h2>'.__('Learning Paths Block', 'learningpathsblock').'</h2>';
    print '<table class="form-table">
        <tr valign="top">
            <th scope="row">'.__('Settings', 'learningpathsblock').'</th>
        </tr>
        <tr>
        <td>
            API url
        </td>
        <td>
            <input type="text" name="learningpathsblock_apiurl" value="' . get_option("learningpathsblock_apiurl") . '" size="50">
        </td>
        </tr>
        </table>';
    print '<p class="submit"><input type="submit" name="submit" value="'.__('Save Changes', 'learningpathsblock').'" /></p>';
    print '</form>';
    print '</div>';
}
