// noinspection JSUnusedGlobalSymbols

import {defineConfig} from "vite";
import path from "path";

export default defineConfig({
    base: './',
    build: {
        assetsInlineLimit: 0,
        outDir: 'dist',
        minify: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    server: {
        hmr: true
    }
})