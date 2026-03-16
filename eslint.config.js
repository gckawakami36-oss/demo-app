import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  prettier,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
]
