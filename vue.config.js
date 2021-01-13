const path = require('path');

//拼接路径
function resolve(dir) {
    return path.join(__dirname, dir)
}
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
			'/oss': {
                target: 'http://doc.yctop.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/oss': '/'
                }
            }
        }
    },
    configureWebpack: {
        externals: {
			'lokijs':'loki',
        },
	},
	chainWebpack: config => {
        config
            .plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        config.resolve.alias
            .set('@', resolve('src'))
            .set('#', resolve('public'))
    },
}
