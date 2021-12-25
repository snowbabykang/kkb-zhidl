/*
 * @author: zhidl
 * @Date: 2021-08-11 15:26:32
 * @description: 
 * @LastEditTime: 2021-08-11 15:34:48
 * @LastEditors: zhidl
 */
import { createRouter, createWebHistory } from 'vue-router';

const AppPage = () => import('../App.vue');
const Home = () =>  import('../pages/home/home.vue');

const routes = [
    {
        path: '/',
        name: 'main',
        component: AppPage,
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach(({
    meta
}, from, next) => {
    document.title = meta.title || '天眼监控系统';
    // sessionStorage.removeItem('menuItem');
    next();
});

export default {
    router,
    routes
};

