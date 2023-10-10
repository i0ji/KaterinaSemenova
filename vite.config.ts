import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    base: 'src',
    plugins: [
        viteTsconfigPaths(),
    ],
    server: {
        open: true,
        port: 3000,
        hmr: true,
    },
})