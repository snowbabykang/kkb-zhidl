/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
    dev: {
        '/api/*': {
            target: 'http://bluewhale.sensorsdata.cn',
        },
        '/api/seat/*': {
            target: 'http://10.42.3.225:9200', // 请求域名
            changeOrigin: true, // 如果是跨域访问，需要配置这个参数
            // ws: true
        },
        '/api/minor_upgrade_package/*': {
            target: 'http://10.42.3.225:8080',
            changeOrigin: true,
            // ws: true
        },
    },
};
