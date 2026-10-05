import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommendedTypeChecked,
  vueTsConfigs.stylisticTypeChecked,

  {
    name: 'app/custom-rules',
    rules: {
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
    },
  },

  {
    name: 'app/vue-rules',
    rules: {
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/define-macros-order': 'warn',
      // RouterView y RouterLink los registra vue-router de forma global
      'vue/no-undef-components': ['error', { ignorePatterns: ['^Router(View|Link)$'] }],
      'vue/no-unused-refs': 'warn',
      'vue/no-unused-properties': 'warn',
      'vue/no-unused-emit-declarations': 'warn',
      'vue/no-useless-v-bind': 'warn',
      'vue/prefer-use-template-ref': 'warn',
    },
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  skipFormatting,
)
