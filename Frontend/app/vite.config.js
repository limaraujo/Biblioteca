import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Biblioteca/",  // Caminho do repositório
  build: {
    outDir: 'docs'  // O build vai para a pasta docs
  }
});
