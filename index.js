'use strict';

module.exports = {

	/**
	 * Extend WordPress
	 *
	 * @since 1.0.0
	 */
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],

	plugins: [
		'@webdevstudios/js-coding-standards',
	],

	env: {
		browser: true,
		jquery: true,
		es6: true,
	},

	/**
	 * Default globals.
	 *
	 * These will get ignored automatically.
	 *
	 * @since  1.0.0
	 */
	globals: {
		_: false,
		Backbone: false,
		jQuery: false,
		JSON: false,
		wp: false,
	},

	/**
	 * WDS & WordPress Coding Standards for JavaScript.
	 *
	 * These are the official WDS and WordPress coding standards
	 * for JavaScript.
	 *
	 * The @standard tag tells you which one's are straight from
	 * WordPress Core, and which one's are WDS's own.
	 *
	 * @since  1.0.0
	 * @see    https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/
	 */
	rules: {

		/**
		 * Module dependency documentation.
		 *
		 * Turn the error off.
		 *
		 * This error gets thrown on ALL JS files that use import.
		 *
		 * @see https://github.com/WordPress/gutenberg/issues/16789
		 *
		 * @since  1.0.0
		 */
		'@wordpress/dependency-group': 0,

		/**
		 * Require @author.
		 *
		 * @standards WDS
		 * @see       https://github.com/WebDevStudios/WDS-Coding-Standards/issues/20
		 * @see       https://github.com/WebDevStudios/WDS-Coding-Standards/issues/5
		 *
		 * @author    Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since     1.2.0
		 *
		 * @report    Warning
		 */
		'@webdevstudios/js-coding-standards/@author': 1,

		/**
		 * Require @since.
		 *
		 * @standards WDS
		 * @see       https://github.com/WebDevStudios/WDS-Coding-Standards/issues/5
		 *
		 * @author    Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since     1.2.0
		 *
		 * @report    Error
		 */
		'@webdevstudios/js-coding-standards/@since': 2,

		/**
		 * Function assignments require DocBlocks to help understand data coming in.
		 *
		 * Note, this does not apply to anonymous functions.
		 *
		 * @standards WDS
		 *
		 * @author    Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since     1.2.0
		 *
		 * @report    Error
		 */
		'@webdevstudios/js-coding-standards/functionExpressionRequireDocblock': 2,

		/**
		 * Encourages use of dot notation whenever possible.
		 *
		 * @standard WP
		 * @see      https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#objects
		 *
		 * @author   Aubrey Portwood
		 * @since    1.0
		 * @since    7/26/2019 Overrides es5 from WP.
		 *
		 * @report   Error
		 */
		'dot-notation': [ 'error', {
			allowKeywords: true,
			allowPattern: '^[a-z]+(_[a-z]+)+$',
		} ],

		/**
		 * Require or disallow spacing between function identifiers and their invocations.
		 *
		 * @standard WP
		 * @see      https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#spacing
		 *
		 * @author   Aubrey Portwood
		 * @since    1.0
		 * @since    7/26/2019 Overrides WP.
		 *
		 * @report   None
		 */
		'func-call-spacing': 'off',

		/**
		 * Enforces spacing between keys and values in object literal properties.
		 *
		 * @standard WP
		 * @see      https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#spacing
		 *
		 * @author   Aubrey Portwood
		 * @since    1.0
		 *
		 * @since    7/26/2019 Overrides WP.
		 *
		 * @report   Error
		 */
		'key-spacing': [ 'error', {
			beforeColon: false,
			afterColon: true,
		} ],

		/**
		 * Enforces empty lines around comments.
		 *
		 * @standard WP
		 *
		 * @author   Aubrey Portwood
		 * @since    1.0
		 *
		 * @report   Error
		 */
		'lines-around-comment': [ 'error', {
			beforeBlockComment: true,
			afterBlockComment: false,
			beforeLineComment: true,
			afterLineComment: false,
			allowBlockStart: true,
			allowBlockEnd: true,
			allowObjectStart: true,
			allowObjectEnd: true,
			allowArrayStart: true,
			allowArrayEnd: true
		} ],

		/**
		 * Don't force vars to be on top.
		 *
		 * In contradiction to WP Coding Standards,
		 * we do not require this.
		 *
		 * @standard WDS
		 * @see      https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#declaring-variables-with-var
		 *
		 * @since    1.0.0
		 * @author   Aubrey Portwood
		 *
		 * @since    7/26/2019 Overrides WP.
		 *
		 * @report   None
		 */
		'vars-on-top': 'off',

		/**
		 * Require or disallow Yoda conditions.
		 *
		 * @standard WDS
		 * @see      https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/#yoda-conditions
		 *
		 * @since  1.0
		 * @author Aubrey Portwood
		 *
		 * @report   Error
		 */
		yoda: [ 'error', 'always' ],

		/**
		 * Require docblocks.
		 *
		 * @standard WDS
		 *
		 * @since  1.0.0
		 * @author Aubrey Portwood
		 *
		 * @report   Error
		 */
		'require-jsdoc': 'error',

		/**
		 * Require that typeof tests use proper strings.
		 *
		 * @standard WDS
		 *
		 * e.g. undefined === typeof var will fail,
		 * while 'undefined' === typeof var will pass.
		 *
		 * @since  1.0.0
		 * @author Aubrey Portwood
		 *
		 * @report   Warning
		 */
		'valid-typeof': 'warn',

		/**
		 * Enforce declarations not expressions.
		 *
		 * @standard WDS
		 *
		 * @since  1.0.0
		 * @author Aubrey Portwood
		 *
		 * @report   Error
		 */
		'func-style': [ 'error', 'declaration', { allowArrowFunctions: true } ],

		/**
		 * Disallow null comparisons without type-checking operators.
		 *
		 * @standard WDS
		 *
		 * @since  1.0.0
		 * @author Aubrey Portwood
		 *
		 * @report   Error
		 */
		'no-eq-null': 'error',

		/**
		 * Must use radix in parseInt.
		 *
		 * @standard WDS
		 *
		 * e.g.
		 *
		 *     var a = 1.22;
		 *     var b = parseInt( a, 10 ); // Radix used here
		 *
		 * @author Aubrey Portwood
		 * @since  1.0.0
		 *
		 * @report   Error
		 */
		radix: 'error',

		/**
		 * Allow padded block comments.
		 *
		 * @standard WDS
		 *
		 * @author  Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since  1.0.0 7/26/2019
		 *
		 * @report Off
		 */
		'padded-blocks': 'off',
	},
};
