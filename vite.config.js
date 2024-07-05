import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/website_inside/",
  server: {
    // Example configuration for compression
    compress: true, // Enable compression
  },
})
