import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'components/index.ts'),
    },
    rollupOptions: {
      external: ['react', 'classnames/bind'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
        },
      ],
      plugins: [
        typescript({
          rootDir: 'components',
          declaration: true,
          declarationDir: 'dist',
          exclude: 'node_modules/**',
          allowSyntheticDefaultImports: true,
          references: [{ path: 'tsconfig.json' }],
        }),
      ],
    },
    copyPublicDir: false,
  },
});
