import { createApp } from 'vue'
import './assets/styles/style.css'
import './assets/styles/variables.css'
import App from './App.vue'
import VueApexCharts from 'vue3-apexcharts'

// Plugins
import { registerPlugins } from './plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
app.use(VueApexCharts)
