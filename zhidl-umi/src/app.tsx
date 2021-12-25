/*
 * @author: zhidl
 * @Date: 2021-12-23 10:25:58
 * @description: 运行时配置文件
 * @LastEditTime: 2021-12-25 20:27:16
 */
import { useModel, history, RequestConfig, RunTimeLayoutConfig } from 'umi';
import {
    BasicLayoutProps,
    Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import { PageLoading, WaterMark } from '@ant-design/pro-layout';

import logo from '@/assets/svg/logo.svg';

import { getUserInfo } from '@/services/login';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import NoAccessPage from '@/pages/403';

import {
    errorHandler,
    requestInterceptors,
    responseInterceptors,
} from './utils/request';

const loginPath = '/login';

export const initialStateConfig = {
    loading: <PageLoading />,
};

export const getInitialState = async (): Promise<{
    access?: string;
    settings?: Partial<LayoutSettings>;
    currentUser?: IUserInfo;
}> => {
    // 如果是登录页面，不执行
    if (history.location.pathname !== loginPath) {
        try {
            // const res = await getUserInfo();
            return {
                // currentUser: res.data,
                // access: res.data.access
            };
        } catch (e) {
            history.push(loginPath);
            console.warn(e);
            return {};
        }
    } else {
        return {
            settings: {},
        };
    }
};

// 全局初始化数据
// export async function getInitialState() {
//     return {
//         name: 'zhidl',
//         avatar: 'http://a.b.com/18-4-12/31903640.jpg',
//     };
// }

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
    return {
        // todo 项目log - 页面左上角
        logo,
        // 配置菜单IconFont图标
        // iconfontUrl: '//at.alicdn.com/t/XXX.js',
        rightContentRender: () => <RightContent />,
        disableContentMargin: false,
        // 水印相关设置
        //   waterMarkProps: {
        //     content: 'zhidl'
        //   },
        footerRender: () => <Footer />,
        onPageChange: () => {
            const { location } = history;
            // todo 如果没有登录，重定向到 login
            // if (!initialState?.currentUser && location.pathname !== loginPath) {
            //   history.push(loginPath);
            // }
        },
        menuHeaderRender: undefined,
        // 自定义 403 页面
        unAccessible: <NoAccessPage />,
        childrenRender: (dom) => (
            <WaterMark
                content="zhidl"
                zIndex={10000}
                fontColor="rgba(0,0,0,.07)"
                fontSize={16}
                gapX={48}
                gapY={48}
            >
                <div style={{ minHeight: 'calc(100vh - 48px - 60px)' }}>
                    {dom}
                </div>
            </WaterMark>
        ),
        ...initialState?.settings,
    };
};

/**
 *  @see https://umijs.org/zh-CN/plugins/plugin-request
 *  request 运行时配置
 */
export const request: RequestConfig = {
    errorHandler,
    requestInterceptors: [requestInterceptors],
    responseInterceptors: [responseInterceptors],
};
