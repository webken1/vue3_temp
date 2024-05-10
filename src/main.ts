import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

const a = 100
const fun = () => {
  console.log('我爱你大海')
}

fun()
