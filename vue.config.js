//seo模块开始
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const webpack = require('webpack')
const path = require('path')
    //seo模块结束
module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "static",
    filenameHashing: true,
    lintOnSave: true,
    pages: {
        index: {
            // 入口文件
            entry: 'src/main.js',
            　　 /*这个是根入口文件*/
            // 模板文件
            template: 'public/index.html',
            // 输出文件
            filename: 'index.html',
            // 页面title
            title: 'Index Page'
        },
        subpage: 'src/main.js'　　　　 /*注意这个是*/
    },
    //打包配置结束
    devServer: {
        https: false, //协议
        open: true, //启动服务时自动打开浏览器访问
        proxy: { // 开发环境代理配置
            [process.env.VUE_APP_BASE_API]: {
                // 目标服务器地址，代理访问 http://localhost:8001
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin: true, // 开启代理服务器，
                pathRewrite: {
                    // 将 请求地址前缀 /dev-api 替换为 空的，
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    },

    transpileDependencies: ['webpack-dev-server/client', 'swiper', 'dom7'],
    chainWebpack: config => {
        config.entry.app = ['@babel/polyfill', './src/main.js'];
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        // 把px单位换算成rem单位
                        rootValue: 75, // // 设计稿宽度的1/10
                        selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*'] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
                    })
                ]
            }
        }
    },
    //seo模块开始
    configureWebpack: config => {
            if (process.env.NODE_ENV !== 'production') return;
            return {
                plugins: [
                    new PrerenderSPAPlugin({
                        // 生成文件的路径，也可以与webpakc打包的一致。
                        // 下面这句话非常重要！！！
                        // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
                        staticDir: path.join(__dirname, 'dist'),
                        // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
                        routes: ['/'],
                        // 这个很重要，如果没有配置这段，也不会进行预编译
                        renderer: new Renderer({
                            inject: {
                                foo: 'bar'
                            },
                            headless: false,
                            renderAfterDocumentEvent: 'render-event'
                        })
                    }),
                ],
            };
        }
        //seo模块结束
}