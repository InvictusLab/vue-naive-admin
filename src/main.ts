import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/routers'

import '@unocss/reset/tailwind.css'
import '@/assets/main.css'
import 'uno.css'

console.log(import.meta.env.VITE_APP_BASE_URL)

const app = createApp(App)
app.use(createPinia())
app.use(router)

// add a meta tag to the head to make sure the naive-ui styles are applied
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.mount('#app')
