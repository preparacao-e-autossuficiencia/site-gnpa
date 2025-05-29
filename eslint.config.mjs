import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from 'eslint-config-prettier';
import wordpress from '@wordpress/eslint-plugin';

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	wordpress.configs.recommended,
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				wp: true
			},
			parserOptions: {
				jsxImportSource: '@wordpress/element'
			}
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
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
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			],
			'@typescript-eslint/ban-ts-comment': [
				'error',
				{
					'ts-expect-error': 'allow-with-description',
					'ts-ignore': 'allow-with-description'
				}
			]
		}
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}']
	},
	{
		ignores: [
			'**/node_modules',
			'**/dist/**',
			'**/build/**',
			'coverage/',
			'src/plugin-src/vendor/'
		]
	}
]