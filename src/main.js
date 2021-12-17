import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'
import router from './router'
import 'bulma'

createApp(App)
    .use(router)
    .mount('#app')
