import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import resolve from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // resolve: {
  //   alias: [{
  //     find: "@server",
  //     replacement: resolve(__dirname, './src/server/')
  //   }]
  // },
  server: {
    fs: {
      cachedChecks: false
    }
  }
})
