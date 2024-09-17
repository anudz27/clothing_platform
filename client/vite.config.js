import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { i } from 'vite/dist/node/types.d-aGj9QkWt'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
