import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: "./",
  build: {
    outDir: "./docs"
  },
  plugins: [react()]
})
