// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    Vuetify(),
    Components(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'mango-vue',
      // ES only: vue and vuetify are peer dependencies resolved by the consumer
      formats: ['es'],
      fileName: 'mango-vue',
      // Consumers import 'mango-vue/dist/style.css'
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['vue', 'vuetify', /^vuetify\//],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
})
