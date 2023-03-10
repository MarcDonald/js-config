const corePlugins = require('./plugins/core');
const coreRules = require('./rules/core');
const coreTypescript = require('./rules/core-typescript');

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	extends: ['eslint:recommended'],
	ignorePatterns: ['node_modules/*'],
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint/eslint-plugin'],
			rules: { ...coreRules, ...coreTypescript },
		},
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: [...corePlugins],
	root: true,
	rules: {
		...coreRules,
	},
};
