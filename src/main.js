import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import vue3GoogleLogin from 'vue3-google-login'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin,{
  clientId: '252095222718-43pntekt91ur6t14gfbpbqo8ifhtm4s3.apps.googleusercontent.com'
})
app.mount('#app')
