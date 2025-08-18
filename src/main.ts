import { createApp } from 'vue'
import '@/assets/styles/style.css'
import '@/assets/styles/variables.css'
import App from '@/App.vue'
import VueApexCharts from 'vue3-apexcharts'

// Plugins
import { registerPlugins } from '@/plugins'
import { registerPlugins as registerPrimeVuePlugins } from '@/plugins/primeVueConfig'

const app = createApp(App)

registerPlugins(app)
registerPrimeVuePlugins(app)

app.mount('#app')
app.use(VueApexCharts)