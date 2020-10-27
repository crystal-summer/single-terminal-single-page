'use strict'
const path = require('path')

module.exports = {
    publicPath: '/',
    outputDir: 'dist',// 打包时生成的生产环境构建文件的目录
    assetsDir: 'static', //打包后的 css、js 等静态文件目录名,相对于outputDir
    lintOnSave: process.env.NODE_ENV === 'development',
    // lintOnSave: true,//取消ESLint 校验
    productionSourceMap: false,
    devServer: {
      port: '9001',
      open: true,
      overlay: {
        warnings: false,
        errors: true
      },
    },
    chainWebpack(config){//把当前项目的根目录的static备份到打包目录的static目录下面
        config
        .plugin('copy')
        .init((CopyWebpackPlugin) => new CopyWebpackPlugin([{
  
          from: path.resolve(__dirname, './static'),
          to: path.resolve(__dirname, './dist/static')
        }])).end()
    }
  }