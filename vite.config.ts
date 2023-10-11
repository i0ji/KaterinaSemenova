import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

import path from "path";

defineConfig({
    base: '',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    plugins: [
        viteTsconfigPaths(),
    ],
    server: {
        open: true,
        port: 3000,
        hmr: true,
    },
})