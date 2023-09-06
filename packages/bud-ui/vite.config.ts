import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/main.ts'),
      name: 'bud-ui',
      fileName: 'bud-ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  plugins: [react()],
});
