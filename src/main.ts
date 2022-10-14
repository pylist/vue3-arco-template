import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import '@/assets/style/global.less'

const app = createApp(App)
// 挂载路由
import router from './router'
app.use(router)
// 挂载Pinia
app.use(store)

app.mount('#app')
