import { defineConfig } from 'vite'
import webExtension from '@samrum/vite-plugin-web-extension'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { getManifest } from './src/browser-extension/manifest'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        react(),
        webExtension({
            manifest: getManifest('chromium'),
        }),
    ],
    server: {
        proxy: {
            '/api': {
                // target: 'https://app.toboto.com',
                // target: 'https://test.tgtool.sekai.me',
                target: 'https://chat.aipainter.work',
                changeOrigin: true,
                secure: false,
            },
            // '/assets/*': {
            //   target: 'http://localhost:8080',
            //   changeOrigin: true,
            //   secure: false,
            // },
        },
    },
    build: {
        minify: !isDev,
        sourcemap: isDev,
        target: 'chrome105',
        rollupOptions: {
            output: {
                dir: 'dist/browser-extension/chromium',
            },
        },
    },
})
