import { createApp } from 'vue'
import store from './store'
import './index.css'
import { createPinia } from 'pinia'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
const app = createApp(App)
// app.use(createPinia())
app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.config.productionTip = false
// app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
