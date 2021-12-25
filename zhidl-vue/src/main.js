import {
    createApp
} from 'vue'
import App from './App.vue'

import vueRouter from './router/router';
import 'reset-css';

createApp(App)
    .use(vueRouter.router)
    .mount('#app');