/*
 * @author: zhidl
 * @Date: 2021-08-11 14:45:04
 * @description: 
 * @LastEditTime: 2021-08-11 14:46:46
 * @LastEditors: zhidl
 */
// mysql配置
module.exports = {
    // 单数据库信息配置
    client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'zhidali123',
        // 数据库名
        database: 'zhidl',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
};