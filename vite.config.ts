import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 93,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './src/components'),
      '$': path.resolve(__dirname, './src/store'),
    }
  }
})
