/*
 * @author: zhidl
 * @Date: 2021-08-11 15:15:53
 * @description: 
 * @LastEditTime: 2021-08-11 15:19:11
 * @LastEditors: zhidl
 */

import axios from "axios";
import qs from 'qs';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const config = {
    publicPath: '',
    // Timeout
    timeout: 60 * 1000
    // withCredentials: true, // Check cross-site Access-Control
};
// 创建实例
const _axios = axios.create(config);
// 重试间隔
_axios.defaults.RETAY_DELAY = 500;
// 定义是否需要loading，默认为true(需要loading)
_axios.defaults.loading = false;
_axios.interceptors.request.use((config) => {
        // 在发送请求之前格式化post数据
        if (config.method === 'post') {
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    (response) => {
        // 响应拦截
        // myLoading.hide();
        const code = response.data.code;
        if (code !== 1000) {
            // 访问频繁
            if (code === 1005) {
                // showToast('操作频繁，请稍后再试');
            } else if (code === 1004) {
                window.location.href="/login";
            }
        }
        return response.data;
    },
    (error) => {
        // myLoading.hide();
        // 响应时发生错误
        const config = error.config;
        if (!config || !config.RETAY) {
            return Promise.reject(error);
        }
        // 定义变量记录已经重试次数
        config.__retryCount = config.__retryCount || 0;
        // 检查是否已经超过定义的重试次数
        if (config.__retryCount >= config.RETAY) {
            return Promise.reject(error);
        }
        // 重试次数加一
        config.__retryCount += 1;
        // 创建一个新的promise 处理错误
        const backoff = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, config.RETAY_DELAY || 1);
        });
        // 将队列置空
        // pendingArr = [];
        //  返回promise 重新调用axios 发起请求
        return backoff.then(() => {
            config.baseURL = '';
            config.loading = false;
            return _axios(config);
        });
    }
);
export default _axios;