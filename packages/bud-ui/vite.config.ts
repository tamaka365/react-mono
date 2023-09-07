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
          compilerOptions: {
            lib: ['ES2020', 'DOM', 'DOM.Iterable'],
            module: 'ESNext',
            moduleResolution: 'bundler',
            noEmit: false,
            strict: true,
            jsx: 'preserve',
            emitDeclarationOnly: true,
            importHelpers: true,
          },
          target: 'es2020',
          rootDir: 'components',
          declaration: true,
          declarationDir: 'dist',
          exclude: 'node_modules/**',
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
    copyPublicDir: false,
  },
});
