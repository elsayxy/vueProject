// 公共环境配置

// 导入path模块
const path = require('path')

// 导入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 导入html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 导入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 项目打包入口
    entry:'./src/main.js',
    // 项目打包出口
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, '../dist')
    },
    // 打包规则
    module:{
        rules:[{
            test:/\.vue$/,
            loader: 'vue-loader'
        },
        {
            test:/\.(jpg|jpeg|png|svg)$/,
            loader:'url-loader',
            options:{
                name:'[name].[ext]',
                limit:2048
            }
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.styl(us)?$/,
            use:[
                'style-loader',
                'css-loader',
                'postcss-loader',
                'stylus-loader'
            ]
        }]
    },
    // 插件
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    resolve:{
        alias:{
            'vue': 'vue/dist/vue.js'
        }
    }
}