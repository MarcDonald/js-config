const { getPackages } = require('@commitlint/config-lerna-scopes').utils;

module.exports = {
	extends: ['@marcdonald/commitlint-config', '@commitlint/config-lerna-scopes'],
	rules: {
		'scope-enum': (ctx) =>
			getPackages(ctx).then((packages) => [2, 'always', [...packages, 'root']]),
	},
};
