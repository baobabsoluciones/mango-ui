import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//import vuetify from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'


export default defineConfig({
  plugins: [vue(),
     //vuetify({autoImport: true})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyLibrary'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})