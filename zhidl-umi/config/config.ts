import { defineConfig } from 'umi';
import routes from './route';
import defaultLayout from './layout';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
    title: defaultLayout.title,
    nodeModulesTransform: {
        type: 'none',
    },
    locale: {
        default: 'zh-CN',
        antd: true,
        baseNavigator: true,
    },
    // 异步loading
    dynamicImport: {
        loading: '@ant-design/pro-layout/es/PageLoading',
    },
    // 浏览器兼容
    targets: {
        ie: 11,
        chrome: 79,
    },
    // 主题色相关
    theme: {
        white: '#FFFFFF',
        'primary-color': defaultLayout.primaryColor,
    },
    layout: {
        locale: false,
        ...defaultLayout,
    },
    // 本地开发代理
    proxy: proxy.dev,
    publicPath: '/',
    // 路由引用
    routes,
    fastRefresh: {},
});
