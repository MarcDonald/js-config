const corePlugins = require('./plugins/core');
const reactPlugins = require('./plugins/react');
const react = require('./react');
const coreRules = require('./rules/core');
const reactRules = require('./rules/react');

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	...react,
	overrides: [
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
			extends: ['@remix-run/eslint-config', 'plugin:tailwindcss/recommended'],
			plugins: [...corePlugins, ...reactPlugins],
			rules: { ...coreRules, ...reactRules },
		},
	],
};
