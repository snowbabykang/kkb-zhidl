/*
 * @author: zhidl
 * @Date: 2021-12-23 19:59:50
 * @description:
 * @LastEditTime: 2021-12-25 00:18:22
 */

interface IUserInfo {
    id: string;
    /** 名字 */
    cname: string;
    access: string;
    img: string;
}
interface API {
    '/login': {
        params: {};
        res: IUserInfo;
        method: 'get';
    };
    '/home': {
        params: {
            /** a是什么意思 */
            a: number;
        };
        res: {
            /** 真牛逼👍 */
            zhidl: string;
        };
        method: 'post';
    };
    '/list': {
        params: {};
        res: {};
        method: 'get';
    };
}

interface API {
    '/a': {
        params: {};
        res: {};
        method: 'get';
    };
}
