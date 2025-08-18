import { createApp } from 'vue'
import '@/assets/styles/style.css'
import '@/assets/styles/variables.css'
import App from '@/App.vue'
import VueApexCharts from 'vue3-apexcharts'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

// PrimeVue styles
import 'primevue/resources/themes/aura/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
registerPlugins(app)

app.mount('#app')
app.use(VueApexCharts)
