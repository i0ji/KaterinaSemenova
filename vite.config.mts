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
            declarations: "/src/declarations",
            assets: "/src/assets",
            data: "/src/data",
            styles: "/src/styles",
            src: "/src",
        },
    },
    // resolve: {
    //     alias: {
    //         components: path.resolve(__dirname, "./src/components"),
    //         declarations: path.resolve(__dirname, "./src/declarations"),
    //         assets: path.resolve(__dirname, "./src/assets"),
    //         data: path.resolve(__dirname, "./src/data"),
    //         styles: path.resolve(__dirname, "./src/styles"),
    //         src: path.resolve(__dirname, "./src"),
    //     },
    // },
    server: {
        hmr: true,
    },
});
