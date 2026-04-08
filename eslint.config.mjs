import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
	{
		ignores: [
			"**/.next/**",
			"**/.turbo/**",
			"**/dist/**",
			"**/coverage/**",
			"**/node_modules/**",
			"**/next-env.d.ts",
		],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ["**/*.{ts,tsx,mts,cts}"],
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
		},
	}
)
