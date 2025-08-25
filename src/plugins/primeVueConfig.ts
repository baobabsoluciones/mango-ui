/* PrimeVue config */
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

// Types
import type { App } from 'vue'

export const registerPlugins = (app: App) => {
  app.use(PrimeVue, { unstyled: true });
}