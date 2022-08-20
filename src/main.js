import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VNode from './components/VNode'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('VNode', VNode);

app.mount('#app')
