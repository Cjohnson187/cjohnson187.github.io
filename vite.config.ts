import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This tells Vite that '@/...' means the absolute path to the './src' directory.
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // commenting out base for github pages deployment
  // base: './', 

  build: {
    //deployment script (gh-pages -d build). // default is dist
    outDir: 'build', 
  }
});
