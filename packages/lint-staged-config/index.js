module.exports = {
	'*.{js,ts,tsx,jsx}': [
		'eslint --fix --ignore-path .gitignore --ext',
		'prettier --check --write --ignore-path .gitignore',
	],
	'*.{yml,md,json,css}': ['prettier --check --write --ignore-path .gitignore'],
};
