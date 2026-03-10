import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Use modern JS — avoids ~16 KiB of legacy polyfills flagged by PageSpeed
    target: 'esnext',
    // Warn if any single chunk exceeds 500 KiB so we catch regressions early
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Split vendor code into separate cached chunks per library
        manualChunks: {
          // React core — changes rarely, will be cached by browser
          'vendor-react': ['react', 'react-dom'],
          // Router — separate from React so only one chunk invalidates on update
          'vendor-router': ['react-router-dom'],
          // Icons — lucide-react is large; split so it's cached independently
          'vendor-icons': ['lucide-react'],
          // Note: html2pdf.js is dynamically imported in utils/helpers.js
          // Vite auto-splits it into its own on-demand chunk
        },
      },
    },
  },
})

