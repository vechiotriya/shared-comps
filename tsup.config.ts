import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false,
  clean: true,
  splitting: false,
  sourcemap: true,
  external: ['react', 'react-native', '@tamagui/core'],
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
