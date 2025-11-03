import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server: {
		origin: 'http://localhost:8000',
		proxy: {
		  '/api': {
			target: 'http://localhost:3000',
			changeOrigin: true,
		  },
		},
	  },
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@tests': path.resolve(__dirname, './tests/cypress'),
    },
  },
})
