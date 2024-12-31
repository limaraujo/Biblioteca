import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Biblioteca/",  // O nome do seu repositório no GitHub
  build: {
    outDir: 'dist',  // Certifique-se de que os arquivos gerados fiquem na pasta 'dist'
  }
});
