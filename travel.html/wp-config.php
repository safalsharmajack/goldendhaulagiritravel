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
define( 'DB_NAME', 'golden dhaulagiri travels and tours' );

/** Database username */
define( 'DB_USER', 'safalsharma' );

/** Database password */
define( 'DB_PASSWORD', '9805175477sa' );

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
define( 'AUTH_KEY',         'ANKvnr8]71e5ih!EN7B: j|F^5EC7{1l:7%0y0]#jQxSwqaR5AHjiMe@Ms%FDPq|' );
define( 'SECURE_AUTH_KEY',  '::kxXz.*y/GgR5Y@k/;o[A)L@v#<W{0%8L4x&|f+VpvC(O=Q}QX(tP9s%# 09!?w' );
define( 'LOGGED_IN_KEY',    'Me>?P> (nbDs/D++i(t[faw+I:LCXltT8uIaRwv0biT+aC>5x%(8_+u6%(|~v12j' );
define( 'NONCE_KEY',        'VWcd:!]H12{#YG4&E(1lBGO-%J@jpN%Wx4PpCOUA0Ax[+j2BS}AuqQAr?V VDwQD' );
define( 'AUTH_SALT',        'd Pn^ojhM;-w-K2O;`,:nu29+xn<<U]S=USj6*~WHjfX_Q~2$wU^yRx>bDzRpa:G' );
define( 'SECURE_AUTH_SALT', 'xFwFBf/q2;vjsOXm9Ps0Nb?^IhN]`d[N5}ioFO8u~N+6{hWLQ.dks*F(@^@UGOb1' );
define( 'LOGGED_IN_SALT',   '<eWIgD>t9@oUs9XOf@r^Xm&P< Aue1=4~Irgf(T[8/*!N%Mj71,l(dHoECmHQU!l' );
define( 'NONCE_SALT',       'AwlF+c8ig@B$w@PIr7]};{3,t9!2UjC4qsUv|5&#lCd#GEZvYgD!I~xGt{aHSD%K' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
