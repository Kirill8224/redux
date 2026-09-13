import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  base: '/redux/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
})


