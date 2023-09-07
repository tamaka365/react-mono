import { defineConfig } from 'vite';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'components/index.ts'),
    },
    rollupOptions: {
      external: ['react'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
          preserveModules: true,
          exports: 'named',
        },
      ],
    },
    copyPublicDir: false,
  },
});
