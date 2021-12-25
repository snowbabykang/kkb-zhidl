/*
 * @author: zhidl
 * @Date: 2021-12-24 14:49:25
 * @description:
 * @LastEditTime: 2021-12-24 14:53:14
 */

import { request } from '@/utils/request';

/**
 * @description: 登录api
 */

export const getUserInfo = async () => await request('/login', {}, 'get');
