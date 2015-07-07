<?php
function example_load_stuff() {
	if (!is_admin()) {
		wp_enqueue_style('main', get_template_directory_uri() . '/css/styles.css', array(), '23042013');
		wp_enqueue_script( 'main', get_template_directory_uri() . '/js/bundle.js', array(), '23042013', true );
	}
}
add_action('wp_enqueue_scripts', 'example_load_stuff');
?>
