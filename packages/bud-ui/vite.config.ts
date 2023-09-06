import { defineConfig } from 'vite';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // outDir: './dist',
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
    },
    rollupOptions: {
      external: ['react'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          // dir: './dist',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
          preserveModules: true,
          exports: 'named',
          // dir: './dist',
        },
      ],
    },
    copyPublicDir: false,
  },
});
