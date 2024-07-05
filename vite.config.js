import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',        // Proxy is used so instead of changing backend target
        changeOrigin: true,                     // URL everywhere it only needs to be changed here
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
