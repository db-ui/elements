import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: '',
    build: {
      outDir: 'dist/react-showcase'
    },
    plugins: [react()]
  };
});
