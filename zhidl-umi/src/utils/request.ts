/*
 * @author: zhidl
 * @Date: 2021-12-23 19:32:03
 * @description: 请求方法
 * @LastEditTime: 2021-12-24 14:52:51
 */
import type {
    ResponseError,
    RequestOptionsInit,
    RequestInterceptor,
    ResponseInterceptor,
} from 'umi-request';
import { notification } from 'antd';
import { request as _request } from 'umi';

const codeMessage: Record<Tcode, string> = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    405: '请求方法不被允许。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

/**
 *  异常处理程序
 *  仅处理 HTTP Error, 对于 HTTP status = 200 && code !== 0 的情况, 业务逻辑内部处理
 *  @see https://beta-pro.ant.design/docs/request-cn
 */
export const errorHandler = async (error: ResponseError) => {
    const {
        response,
        request: { options },
    } = error;
    const { skipErrorHandler } = options as RequestOptionsInit & {
        skipErrorHandler: boolean;
    };

    // 接口跳过异常
    if (skipErrorHandler) {
        return response;
    }

    // 未知异常
    let message = '';
    let description = '';
    if (!response) {
        message = '发生未知异常';
        description = '请联系系统管理员';
    } else {
        // HTTP Error Code
        const { url, statusText } = response;
        const status = response.status as Tcode;
        try {
            const res = await response.json();
            message = `${status}: ${
                res.message || codeMessage[status] || statusText
            }`;
        } catch (e) {
            message = '请求接口异常';
        }
        description = `${options.method}: ${url}`;
    }

    notification.error({
        message,
        description,
    });

    return Promise.reject(response);
};

/**
 *  请求拦截器
 */
export const requestInterceptors: RequestInterceptor = (url, options = {}) => ({
    url,
    options: {
        ...options,
        headers: {
            // todo token处理
            //   token: localStorage.getItem('token') || '',
        },
    },
});
/**
 *  响应拦截器
 *  预留, 后续有需求再添加, 目前无需做 HTTP Error 之外的拦截
 */
export const responseInterceptors: ResponseInterceptor = (response) => response;

export const request: typeof Drequest = async (url, params = {}, method) => {
    const obj: {
        data?: Object;
        params?: Object;
    } = {};

    if (method === 'post') {
        obj.data = params;
    }

    if (method === 'get') {
        obj.params = params;
    }
    try {
        return (await _request(url, { method, ...obj })) as any;
    } catch (e) {
        console.warn(e);
    }
};
