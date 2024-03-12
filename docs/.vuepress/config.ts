import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  title: 'Mango UI',
  description: 'Mango UI is a Vue 3 component library based on Vuetify. This library provides a set of reusable UI components that can be used in any Vue 3 project.',

  bundler: viteBundler({
    // vite bundler options here
  }),
  theme: defaultTheme({
        sidebar: {
      '/': [
        {
          text: 'Guide',
          link: '/guide/',
        },
        {
          text: 'Components',
          link: '/components/',
        },
      ],
    },
  }),
});
