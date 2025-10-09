import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Use Node's path module for reliable path resolution
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    resolve: {
        // 1. Ensure you have '.ts' and '.tsx' extensions included
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            // 2. This is the only alias you need for your local src directory
            // This tells Vite that '@/...' means the absolute path to the './src/...' directory.
            "@": path.resolve(__dirname, "./src"),
        },
    },

    // You can include other necessary build/server options from your old config here
    build: {
        target: 'esnext',
        outDir: 'build',
    },
    server: {
        port: 3000,
        open: true,
    },
});
