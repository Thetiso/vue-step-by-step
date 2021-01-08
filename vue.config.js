module.exports = {
    lintOnSave: true,
    // cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
    devServer: {
        port: 3600,
        disableHostCheck: true,
        proxy: {
            '/api-sh': {
                target:  'http://pv.sohu.com/',// 'http://127.0.0.1:8100',
                changeOrigin: true,
                pathRewrite: {
                    '^/api-sh': '/'
                }
            },
        }
    },
    configureWebpack: {
        externals: {
            'weixin-js-sdk': 'wx'
        },
    },
}
