import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';

export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: { globals: { ...globals.browser, wp: true } },
		rules: {
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			camelcase: [
				'error',
				{
					properties: 'never', // Ensure object properties are not enforced (optional)
					ignoreDestructuring: false, // Enforce destructured object properties
					ignoreImports: false, // Enforce camelCase in imports
					ignoreGlobals: true // Optionally ignore global variables
				}
			],
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
					// ignore unused vars that start with an underscore
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			]
		}
	},
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{
		files: ['**/*.svelte', '**/*.svelte.{js,mjs,cjs,ts}'],
		languageOptions: {
			parser: svelte.parser,
			parserOptions: {
				parser: {
					// Specify a parser for each lang.
					ts: ts.parser,
					js: js.parser
				}
			}
		}
	},
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
