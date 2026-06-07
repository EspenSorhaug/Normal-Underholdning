import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // I utvikling kjører frontend (Vite) og backend (server.js) på hver sin port.
  // Denne proxyen videresender alle /api-kall til Node-serveren på port 3001,
  // slik at frontend kan kalle "/api/videos" uten å bry seg om porten.
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
