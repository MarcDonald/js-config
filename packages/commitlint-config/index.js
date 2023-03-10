module.exports = {
	extends: ['@commitlint/config-conventional'],
	prompt: {
		questions: {
			breakingBody: {},
		},
	},

	rules: {
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
