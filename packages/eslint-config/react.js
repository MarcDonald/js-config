const corePlugins = require('./plugins/core');
const reactPlugins = require('./plugins/react');
const coreRules = require('./rules/core');
const reactRules = require('./rules/react');

const core = require('./index');

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	...core,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'plugin:tailwindcss/recommended'],
	ignorePatterns: ['node_modules/*'],
	overrides: [
		...core.overrides,
		{
			files: ['**/*.ts?(x)'],
			parser: '@typescript-eslint/parser',
			settings: {
				react: {
					version: 'detect',
					tailwindcss: {
						callees: ['cn'],
					},
				},
			},
			env: {
				browser: true,
				node: true,
				es6: true,
			},
			plugins: [...corePlugins, ...reactPlugins],
			rules: {
				...coreRules,
				...reactRules,
			},
		},
	],
};
