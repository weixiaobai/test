// vue.config.js 配置说明
module.exports = {
    // baseUrl  type:{string} default:'/' 
    // 将部署应用程序的基本URL
    // 将部署应用程序的基本URL。
    // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

    baseUrl: '/',//process.env.VUE_APP_API_URL,//process.env.NODE_ENV === 'production' ? '/' : '/',

    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

    outputDir: 'wwwroot',

    // pages:{ type:Object,Default:undfind } 
    /*
      构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
      个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
      的字符串，
      注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
    */
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html'
        }
    },

    //lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: false,
    
    // productionSourceMap：{ type:Bollean,default:true } 生产源映射
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: true,

    // devServer:{type:Object} 3个属性host,port,https
    // 它支持webPack-dev-server的所有选项
    devServer: {
        port: 50010, // 端口号
        host: '0.0.0.0',
        disableHostCheck: true,
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        // 默认情况对接到TEST数据环境，目前测试环境不可用，先对接到Q环境
        proxy: {
            "/xdf-vueproxy-api/passport": {
                target: 'http://testu2.staff.xdf.cn',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/xdf-vueproxy-api/passport': ''
                }
            },
            "/xdf-vueproxy-api/apinis": {
                target: 'http://tapinis.staff.xdf.cn',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/xdf-vueproxy-api/apinis': ''
                }
            },
            "/xdf-vueproxy-api/apixdfpay": {
                target: 'http://tapixdfpay.staff.xdf.cn',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/xdf-vueproxy-api/apixdfpay': ''
                }
            },
            "/xdf-nodejs-api": {
                target: 'http://127.0.0.1:8888',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/xdf-nodejs-api': ''
                }
            }
        }
    },

    //webpack的配置在这个属性里修改configureWebpack
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config.devtool = 'source-map';
            // mutate config for production...
        }
    },
    // 第三方插件配置
    pluginOptions: {}
}



