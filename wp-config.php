<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'aisback' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '+Kglef)Wx)=ffpQIxxZiiaV61#S:~0wL:29k{T%HN!D!Bz9nQG.O<.I]L|@]<+WN' );
define( 'SECURE_AUTH_KEY',  'cBCmV1#A+djEqZn%<46W0sL?i!YY!h.CDI$aV|!?E#H:hW:JUR%TyzYCmDu)f=uR' );
define( 'LOGGED_IN_KEY',    'u@X7]k*Au$!2ZHST:^ LN-q0YG]-hI*3:/*+5F?`4o,;ld}9a7-ttm?PQ&4K/h2g' );
define( 'NONCE_KEY',        'AHGT$~Q`.>fpOv&CQ|#L8cMNn,K668#!,bPy|R-<0Gt/S=-w%P{>WKTOJo*]w+so' );
define( 'AUTH_SALT',        '5_7N)wDX>bx7K!LlsPApS1bJ)AyUtUjn#3X_,gK/%fY*Q^0.`)-+n#niO6g#4#9/' );
define( 'SECURE_AUTH_SALT', 'ooLQnAfVOC2q-V8CnqGQd$GzEJt]oHVg|I+=ZN2.Cr^jz,~fo}?<h5PZ2q5?~h#E' );
define( 'LOGGED_IN_SALT',   'y.4==8aFE6UE8Oy|zzHvp/)dvfyOEAy{Z,19Iu<9](UW;uvy>>`Yr59aD03t_13u' );
define( 'NONCE_SALT',       ']S.+>=C%4mVXivWjH!lGfGyV_}NU>`:~61O;<+!0XqND(p8$w5Z_oW&9A/hCK|dd' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'ais_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
