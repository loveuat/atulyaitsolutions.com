<?php
/**
 * Twenty Twenty-Five functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Five
 * @since Twenty Twenty-Five 1.0
 */

if ( ! function_exists( 'twentytwentyfive_post_format_setup' ) ) :
	/**
	 * Adds theme support for post formats.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_post_format_setup() {
		add_theme_support( 'post-formats', array( 'aside', 'audio', 'chat', 'gallery', 'image', 'link', 'quote', 'status', 'video' ) );
	}
endif;
add_action( 'after_setup_theme', 'twentytwentyfive_post_format_setup' );

if ( ! function_exists( 'twentytwentyfive_editor_style' ) ) :
	/**
	 * Enqueues editor-style.css in the editors.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_editor_style() {
		add_editor_style( 'assets/css/editor-style.css' );
	}
endif;
add_action( 'after_setup_theme', 'twentytwentyfive_editor_style' );

if ( ! function_exists( 'twentytwentyfive_enqueue_styles' ) ) :
	/**
	 * Enqueues the theme stylesheet on the front.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_enqueue_styles() {
		$suffix = SCRIPT_DEBUG ? '' : '.min';
		$src    = 'style' . $suffix . '.css';

		wp_enqueue_style(
			'twentytwentyfive-style',
			get_parent_theme_file_uri( $src ),
			array(),
			wp_get_theme()->get( 'Version' )
		);
		wp_style_add_data(
			'twentytwentyfive-style',
			'path',
			get_parent_theme_file_path( $src )
		);
	}
endif;
add_action( 'wp_enqueue_scripts', 'twentytwentyfive_enqueue_styles' );

if ( ! function_exists( 'twentytwentyfive_block_styles' ) ) :
	/**
	 * Registers custom block styles.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_block_styles() {
		register_block_style(
			'core/list',
			array(
				'name'         => 'checkmark-list',
				'label'        => __( 'Checkmark', 'twentytwentyfive' ),
				'inline_style' => '
				ul.is-style-checkmark-list {
					list-style-type: "\2713";
				}

				ul.is-style-checkmark-list li {
					padding-inline-start: 1ch;
				}',
			)
		);
	}
endif;
add_action( 'init', 'twentytwentyfive_block_styles' );

if ( ! function_exists( 'twentytwentyfive_pattern_categories' ) ) :
	/**
	 * Registers pattern categories.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_pattern_categories() {

		register_block_pattern_category(
			'twentytwentyfive_page',
			array(
				'label'       => __( 'Pages', 'twentytwentyfive' ),
				'description' => __( 'A collection of full page layouts.', 'twentytwentyfive' ),
			)
		);

		register_block_pattern_category(
			'twentytwentyfive_post-format',
			array(
				'label'       => __( 'Post formats', 'twentytwentyfive' ),
				'description' => __( 'A collection of post format patterns.', 'twentytwentyfive' ),
			)
		);
	}
endif;
add_action( 'init', 'twentytwentyfive_pattern_categories' );

if ( ! function_exists( 'twentytwentyfive_register_block_bindings' ) ) :
	/**
	 * Registers the post format block binding source.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return void
	 */
	function twentytwentyfive_register_block_bindings() {
		register_block_bindings_source(
			'twentytwentyfive/format',
			array(
				'label'              => _x( 'Post format name', 'Label for the block binding placeholder in the editor', 'twentytwentyfive' ),
				'get_value_callback' => 'twentytwentyfive_format_binding',
			)
		);
	}
endif;
add_action( 'init', 'twentytwentyfive_register_block_bindings' );

if ( ! function_exists( 'twentytwentyfive_format_binding' ) ) :
	/**
	 * Callback function for the post format name block binding source.
	 *
	 * @since Twenty Twenty-Five 1.0
	 *
	 * @return string|void Post format name, or nothing if the format is 'standard'.
	 */
	function twentytwentyfive_format_binding() {
		$post_format_slug = get_post_format();

		if ( $post_format_slug && 'standard' !== $post_format_slug ) {
			return get_post_format_string( $post_format_slug );
		}
	}
endif;





/**
 * 2. CORS HEADERS (Next.js se request allow karne ke liye)
 */
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        header('Access-Control-Allow-Origin: http://localhost:3000'); // production mein '*' ki jagah apna domain dalein
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        return $value;
    });
}, 15);


add_action('rest_api_init', function () {

    register_rest_route('atul/v1', '/contact', [
        'methods' => ['GET', 'POST'],
        'permission_callback' => '__return_true',
         'callback' => 'atul_contact_form',

    ]);

});

/**
 * 4. FORM HANDLER - data save + email
 */
function atul_contact_form($request)
{
    $data = $request->get_json_params();

    // Agar JSON parse na ho to fallback
    if (empty($data)) {
        $data = $request->get_params();
    }

    // Validation
    if (empty($data['name']) || empty($data['email'])) {
        return new WP_REST_Response([
            'success' => false,
            'message' => 'Name and email are required.',
        ], 400);
    }

    $name    = sanitize_text_field($data['name']);
    $email   = sanitize_email($data['email']);
    $phone   = sanitize_text_field($data['phone'] ?? '');
    $message = sanitize_textarea_field($data['message'] ?? '');

    global $wpdb;
    $table_name = 'ais_custom_contacts';

    // DB mein insert
    $inserted = $wpdb->insert($table_name, [
        'name'       => $name,
        'email'      => $email,
        'phone'      => $phone,
        'message'    => $message,
        'created_at' => current_time('mysql'),
    ]);

    // Agar insert fail ho to exact DB error bhejo (debugging ke liye)
    if ($inserted === false) {
        return new WP_REST_Response([
            'success'  => false,
            'db_error' => $wpdb->last_error,
            'message'  => 'Database insert failed.',
        ], 500);
    }

    // Admin ko email bhejo
    $admin_email = get_option('admin_email');
    $subject     = 'New Contact Form Submission';
    $body        = "Name: $name\n";
    $body       .= "Email: $email\n";
    $body       .= "Phone: $phone\n";
    $body       .= "Message: $message\n";
    $headers     = ['Content-Type: text/plain; charset=UTF-8', "Reply-To: $name <$email>"];

    $mail_sent = wp_mail($admin_email, $subject, $body, $headers);

    return new WP_REST_Response([
        'success'   => true,
        'mail_sent' => $mail_sent,
        'id'        => $wpdb->insert_id,
    ], 200);
}



