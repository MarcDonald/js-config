module.exports = {
	'@typescript-eslint/explicit-function-return-type': ['off'],
	'@typescript-eslint/explicit-module-boundary-types': ['off'],
	'@typescript-eslint/no-empty-function': ['off'],
	'@typescript-eslint/no-explicit-any': ['off'],
	'no-unused-vars': 'off',
	'@typescript-eslint/no-unused-vars': [
		'error',
		{
			argsIgnorePattern: '^_',
			varsIgnorePattern: '^_',
			caughtErrorsIgnorePattern: '^_',
		},
	],
};
