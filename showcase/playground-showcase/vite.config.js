import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: `/playground-showcase/`,
    build: {
      outDir: 'dist/playground-showcase'
    },
    plugins: [react()]
  };
});
