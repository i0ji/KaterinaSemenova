// noinspection JSUnusedGlobalSymbols

import {defineConfig} from "vite";

export default defineConfig({
    base: "./",
    build: {
        assetsInlineLimit: 0,
        outDir: "dist",
        minify: true,
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ["legacy-js-api"],
            },
        },
    },
    resolve: {
        alias: {
            components: "/src/components",
            declarations: "src/declarations",
            assets: "/src/assets",
            data: "/src/data",
            styles: "/src/styles",
            src: "./",
        },
    },
    server: {
        hmr: true,
    },
});
