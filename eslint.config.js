import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Bilder fra public/ skal vises med <Bilde>, som gir WebP i riktig størrelse.
      'no-restricted-syntax': [
        'error',
        {
          selector: 'JSXOpeningElement[name.name="img"]',
          message:
            'Bruk <Bilde> fra src/components/Bilde.tsx i stedet for <img>, så bildet blir optimalisert.',
        },
      ],
    },
  },
  {
    // Bilde.tsx er selve komponenten. YouTube-miniatyrer kommer fra YouTube og
    // kan ikke optimaliseres av skriptet vårt.
    files: ['src/components/Bilde.tsx', 'src/components/YouTubeGrid.tsx'],
    rules: { 'no-restricted-syntax': 'off' },
  },
])
