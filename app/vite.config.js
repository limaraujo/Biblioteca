import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Biblioteca/",  // Caminho correto para o repositório no GitHub Pages
  build: {
    outDir: 'docs',  // Gera os arquivos do build na pasta 'docs' na raiz do repositório
  }
});
