// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import './index.css'

createApp(App)
    .use(store)
    // .use(router)
    .mount('#app')