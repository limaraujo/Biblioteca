import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Biblioteca/', // Caminho base do repositório no GitHub Pages
  build: {
    outDir: resolve(__dirname, '../docs'), // Define a pasta `docs` na raiz do projeto
  },
});
