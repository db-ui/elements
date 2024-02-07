import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'dist/playground-showcase'
    },
    plugins: [react()]
  };
});
