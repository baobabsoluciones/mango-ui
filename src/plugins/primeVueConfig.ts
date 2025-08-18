/* PrimeVue config */
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

// PrimeVue styles
import 'primeicons/primeicons.css';

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app.use(PrimeVue, {
    theme: {
      preset: Aura
    }
  });
}