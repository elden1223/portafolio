import { defineConfig } from "vite";

export default defineConfig({
    base: 'portafolio/',
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    plugins: [
        
    ],
    server: {
        port: 3100,
        host: '0.0.0.0',
    },
    build: {
        outDir: "./dist",
    },
});
