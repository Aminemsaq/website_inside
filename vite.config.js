import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/website_inside/",
  plugins: [react()],

  server: {
    // Example configuration for compression
    compress: true, // Enable compression
  },
})
