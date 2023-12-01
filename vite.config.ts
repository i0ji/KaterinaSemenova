// noinspection JSUnusedGlobalSymbols

import {defineConfig} from "vite";

export default defineConfig({
    base: './',
    build: {
        assetsInlineLimit: 0,
        outDir: 'dist',
        minify: true
    },
    resolve: {
        alias: {
            components: "/src/components",
            assets: "/src/assets",
            data: "/src/data",
            styles: "/src/styles",
            src: "."
        }
    },
    server: {
        hmr: true
    }
})