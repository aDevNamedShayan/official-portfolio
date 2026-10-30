import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import { defineConfig } from 'eslint/config'
import pluginReact from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const compat = new FlatCompat()

const compatConfig = compat.config({
    extends: ['plugin:@next/eslint-plugin-next/core-web-vitals']
})

export default defineConfig(
    {
        ignores: ['node_modules/**', '.next/**', '.turbo/**', 'build/**', 'coverage/**', 'dist/**', 'global.d.ts']
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        extends: [
            pluginJs.configs.recommended,
            pluginReact.configs.flat.recommended,
            ...tseslint.configs.recommended,
            ...compatConfig
        ],
        plugins: {
            'simple-import-sort': simpleImportSort
        },
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^react$', '^next', '^react', '^@?\\w'],
                        ['^@/(?!(\\.\\./public|public))'],
                        ['^@/\\.\\./public', '^@/public'],
                        ['^\\u0000'],
                        ['^\\./', '^\\../']
                    ]
                }
            ],
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/no-unknown-property': 'off',
            /*  @typescript-eslint/consistent-type-exports ~> Isolated modules is already enabled in ts config */
            '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
            '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
            '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
            '@typescript-eslint/no-explicit-any': 'off'
        }
    }
)
