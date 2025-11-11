import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  clean: true,
  dts: true,
  splitting: false,
  sourcemap: true,
  external: ['react', 'react-dom', 'react-native', 'tamagui']
})
