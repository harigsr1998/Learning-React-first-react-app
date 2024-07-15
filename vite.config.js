import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Learning-React-first-react-app/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.jsonsilo.com/public/a699039a-d2a2-4259-99d2-ee448c52093f',        // Proxy is used so instead of changing backend target
        changeOrigin: true,                     // URL everywhere it only needs to be changed here
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
