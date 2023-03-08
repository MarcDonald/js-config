const {getPackages} = require('@commitlint/config-lerna-scopes').utils;

module.exports = {
	extends: [
		'@commitlint/config-conventional',
		'@commitlint/config-lerna-scopes',
	],
	prompt: {
		questions: {
			breakingBody: {
			},
		}
	},
	rules: {
		'scope-enum': (ctx) =>
				getPackages(ctx).then((packages) => [2, 'always', [...packages, 'root']]),

		'type-enum': () => [
			2,
			'always',
			[
				'feat',
				'fix',
				'build',
				'chore',
				'ci',
				'docs',
				'style',
				'refactor',
				'test',
				'revert',
			],
		],
	},
};
