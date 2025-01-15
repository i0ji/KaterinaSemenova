import js from "@eslint/js";
import type {Linter} from "eslint";

export default [
    js.configs.recommended,
    {
        files: ["src/**/!(*.*)"],
        ignores: ["node_modules/", ".yarn/", "dist/"],
        rules: {
            // "no-console": [0],
            // "no-unused-vars": "error",
            // semi: ["warn", "always"],
        },
    },
] satisfies Linter.Config[];
