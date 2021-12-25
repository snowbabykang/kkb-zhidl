/*
 * @author: zhidl
 * @Date: 2021-12-24 11:18:08
 * @description: 基础配置
 * @LastEditTime: 2021-12-25 20:31:46
 */
import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = ProSettings & {
    pwa?: boolean;
    siderWidth?: number;
};

const proSettings: DefaultSettings = {
    navTheme: 'light',
    // 主题色
    primaryColor: '#00bf8a',
    layout: 'top',
    // siderWidth: 208,
    contentWidth: 'Fluid',
    fixedHeader: true,
    fixSiderbar: true,
    colorWeak: false,
    menu: {
        locale: false,
        // locale: false,
    },
    title: '蓝鲸',
    pwa: false
};

export type { DefaultSettings };

export default proSettings;
