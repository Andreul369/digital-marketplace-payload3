/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  tailwindConfig: './tailwind.config.ts',
  importOrder: [
    '^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/',
    '^[../]',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '4.4.0',
};

export default config;

// from prettierrc.json
// {
//   "singleQuote": true,
//   "trailingComma": "all",
//   "printWidth": 100,
//   "semi": false
// }
