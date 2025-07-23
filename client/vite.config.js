import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// Inherit the Power of the Legendary Heroes!

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
