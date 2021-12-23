import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'
import router from './router'
import 'bulma'
import { Autocomplete, Config } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

createApp(App)
    .use(router)
    .use(Autocomplete)
    .use(Config, {
        iconPack: 'fas'
    })
    .mount('#app')
