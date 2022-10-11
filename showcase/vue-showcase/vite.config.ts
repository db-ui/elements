import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    outDir: 'dist/vue-showcase'
  },
  plugins: [vue()],
  resolve: {
    dedupe: ['vue'], // <-- this is required for vite build
    alias: {
      '@': '/src'
    }
  },
  server: {
    port: 1337,
    fs: {
      strict: false
    }
  }
});
