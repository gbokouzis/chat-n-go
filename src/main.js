import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

import { auth } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

let app 

onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App)
            .use(store)
            .use(router)
            .mount('#app')
    }
})