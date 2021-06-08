import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VIcon from 'vue-tailwind-icons'

const app = createApp(App)

app.use(VIcon)

app.mount('#app')
