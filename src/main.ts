import '@unocss/reset/tailwind.css'
import 'uno.css'

import './assets/main.css'

import chalk from 'chalk'

import App from './App.vue'
import router from './router'

// Tailwind's reset rules will override Naive-UI's rules, so we need to set Naive-UI to have the highest priority.
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

console.log(chalk.cyan.bold('BASE URL: ') + chalk.yellow(`${import.meta.env.VITE_APP_HOST}`))
console.log(chalk.cyan.bold('MODE: ') + chalk.yellow(`${import.meta.env.MODE}`))
console.log(chalk.cyan.bold('SSR: ') + chalk.yellow(`${import.meta.env.SSR}`))

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
