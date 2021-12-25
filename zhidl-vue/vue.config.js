const path = require('path');
module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV == 'production' ? '/dist/' : '/',
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://192.168.80.89:7002',
        //         ws: true,
        //         changeOrigin: true
        //     }
        // }
    },
    // 导入公共less变量
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/css/*.common.less')
            ]
        }
    }
}
