import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        Inicio: path.resolve(__dirname, 'index.html'),
        Informacion: path.resolve(__dirname, 'index2.html'),
        Final: path.resolve(__dirname, 'index3.html'),
      },
    },
  },
})
