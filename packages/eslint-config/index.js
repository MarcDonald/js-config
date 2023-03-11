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
	extends: ['eslint:recommended', 'plugin:vitest-globals/recommended'],
	ignorePatterns: ['node_modules/*'],
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint/eslint-plugin'],
			rules: { ...coreRules, ...coreTypescript },
		},
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/*.spec.{j,t}s?(x)',
				'**/*.test.{j,t}s?(x)',
			],
			env: {
				'vitest-globals/env': true,
			},
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
