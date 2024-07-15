import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Learning-React-first-react-app/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://harigsr1998.github.io/Learning-React-first-react-app-data/jobs.json',        // Proxy is used so instead of changing backend target
        changeOrigin: true,                     // URL everywhere it only needs to be changed here
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
