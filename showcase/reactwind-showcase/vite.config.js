import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: '',
    build: {
      outDir: 'dist/reactwind-showcase'
    },
    plugins: [react()]
  };
});
