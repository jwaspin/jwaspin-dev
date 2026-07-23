import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Set VITE_BASE_PATH="/repo-name/" when deploying to https://<user>.github.io/<repo-name>/
// without a custom domain. Leave unset (defaults to "/") when a custom domain is mapped.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
