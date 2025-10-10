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
  
  // -------------------------------------------------------------------
  // 🚀 FIX: Set base to './' for GitHub Pages to resolve asset paths correctly.
  // This forces relative paths (e.g., ./assets/...) in the built index.html.
  // This is often required even for User Pages to resolve assets properly 
  // in some hosting configurations.
  // -------------------------------------------------------------------
  base: './', 
});
