module.exports = {
	'no-restricted-imports': ['error'],
	'linebreak-style': ['error', 'unix'],
	'import/order': [
		'error',
		{
			groups: [
				'builtin',
				'external',
				'internal',
				'parent',
				'sibling',
				'index',
				'object',
			],
			'newlines-between': 'always',
			alphabetize: {
				order: 'asc',
				caseInsensitive: true,
			},
		},
	],
	'import/default': 'off',
	'import/no-named-as-default-member': 'off',
	'import/no-named-as-default': 'off',
	'prettier/prettier': ['error', {}],
};
