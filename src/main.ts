import '@unocss/reset/tailwind.css'
import 'uno.css'

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Tailwind's reset rules will override Naive-UI's rules, so we need to set Naive-UI to have the highest priority.
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

console.log(`%cBASE URL: %c${import.meta.env.VITE_APP_HOST}`, 'color: cyan', 'color: yellow')
console.log(`%cMODE: %c${import.meta.env.MODE}`, 'color: cyan', 'color: yellow')
console.log(`%cSSR: %c${import.meta.env.SSR}`, 'color: cyan', 'color: yellow')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
