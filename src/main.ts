import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// Plugins
import { registerPlugins } from '@/plugins'

//Styles
import './assets/styles/main.css';
import './assets/styles/variables.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

