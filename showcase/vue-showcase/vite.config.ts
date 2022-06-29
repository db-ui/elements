import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-showcase/',
  build: {
    outDir: 'dist/vue-showcase'
  },
  plugins: [vue()],
  resolve: {
    dedupe: ['vue'], // <-- this is required for vite build
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 1337,
    fs: {
      strict: false
    }
  }
});
