// 开发环境配置
const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')

// 导入webpack插件
const Webpack = require('webpack')

const devConfig = {
    // mode:'production',  // 生产环境
    mode:'development',  // 开发环境
    // devServer配置
    devServer:{
        // 指定服务器根目录
        contentBase: './dist',
        // 自动打开浏览器
        open: true,
        // 启用热模块替换
        hot: true
    },
    // sourceMap，帮助快速定位错误行
    // devtool:'eval',    // 用于生产环境
    devtool:'cheap-source-map',    // 用于开发环境
     // 插件
    plugins:[
        new Webpack.HotModuleReplacementPlugin()
    ],
}

module.exports = merge(devConfig,baseConfig)