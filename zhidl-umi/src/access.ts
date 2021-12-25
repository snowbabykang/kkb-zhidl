/*
 * @author: zhidl
 * @Date: 2021-12-24 13:11:29
 * @description: 角色权限，路由配置，页面展示都可用
 * @LastEditTime: 2021-12-25 19:46:43
 */

// import { Access , useAccess } from 'umi';

// src/access.ts
/**
 * @see: https://umijs.org/zh-CN/plugins/plugin-access
 * @description: 判断权限
 */
export default function (initialState = {}) {
    console.log(initialState, 'access');
    return {
        canRead404: false,
        canAdmin: true
    };
}
