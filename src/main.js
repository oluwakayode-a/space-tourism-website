import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from "@vueuse/motion"
import { createHead } from '@vueuse/head'
import './tailwind.css'
import '../src/assets/base.css'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(MotionPlugin)
app.use(head)

app.mount('#app')
