/*
 * @author: zhidl
 * @Date: 2021-12-23 16:03:20
 * @description: 路由配置
 * @LastEditTime: 2021-12-25 20:25:52
 */
import { MenuDataItem } from '@ant-design/pro-layout';

const routes: MenuDataItem[] = [
    {
        name: '登录页',
        path: '/login',
        layout: false, // 不展示侧边栏
        hideInMenu: true, // 在菜单栏中隐藏
        component: '@/pages/Login',
        // 权限拦截 value为 src/access 的key
        // access: 'canRead404',
    },
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: '首页',
        path: '/home',
        component: '@/pages/Home',
    },
    {
        name: '包管理',
        path: '/packages',
        component: '@/pages/Packages',
        // redirect: '/packages/query',
        routes: [
            {
                name: '包查询',
                path: '/packages/query',
                component: '@/pages/Packages/Query',
            },
            {
                name: '包构建',
                // path: '/packages/packageBuild',
                path: 'http://jenkins-red.sensorsdata.cn:8080/',
            },
            {
                name: '操作计划包构建',
                path: '/packages/oppBuild',
                component: '@/pages/Packages/OppBuild',
            },
            {
                name: '历史记录',
                path: '/packages/history',
                component: '@/pages/Packages/History',
            },
            {
                name: '版本信息',
                path: '/packages/changeLog',
                component: '@/pages/Packages/ChangeLog',
            },
        ],
    },
    {
        component: './404',
    },
];

export default routes;
