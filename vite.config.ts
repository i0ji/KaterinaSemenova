import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

const path = require("path");

export default defineConfig({
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