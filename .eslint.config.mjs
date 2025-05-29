import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import wordpress from '@wordpress/eslint-plugin';

export default [
	js.configs.recommended,
	...ts.configs.recommended,
	wordpress.configs.recommended,
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser, wp: true
			},
			parserOptions: {
				jsxPragma: '@wordpress/element'
			}
		},
		rules: {
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			camelcase: [
				'error',
				{
					properties: 'never',
					ignoreDestructuring: false,
					ignoreImports: false,
					ignoreGlobals: true
				}
			],
			'react/react-in-jsx-scope': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/ban-ts-comment': [
				'error',
				{
					'ts-expect-error': 'allow-with-description',
					'ts-ignore': 'allow-with-description'
				}
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			]
		}
	},
	{ files: ['**/*.{js,mjs,cjs,ts,tsx}'] },
	{
		ignores: [
			'**/build/**',
			'**/dist/**',
			'coverage/',
			'src/plugin-src/vendor',
			'src/plugin-src/apps',
			'src/block-editor/wp-script/src/index.tsx'
		]
	}
];
