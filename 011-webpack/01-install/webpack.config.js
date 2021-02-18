const path = require('path');// node核心模块path
const HtmlWebpackPlugin = require('html-webpack-plugin');// 自动生成html的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");// 分离css为单独文件的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 自动清理文件的插件
// 在package.json 中可以配置脚本
/*
    就可以npx run build
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack --watch --progress"
    },
*/
module.exports = {// 导出对象
    mode: 'development', //mode用来指定环境,可以是development(开发环境) 或者 production(生产环境),这两个环境下的构建目标存在着巨大差异，建议为每个环境编写彼此独立的 webpack 配置
    // 入口
    // entry: './src/index.js',//指定需要打包的入口文件  单入口
    entry: {
        index: './src/index.js',
        common: './src/common.js',
        conpack: './src/conpack.js'
    },
    // 出口
    output: {
        // 多入口的输出 filename中至少要加 [name]- 
        // 1. [name] chunk名称
        // 2. [fullhash] 模块标识符的hash,每一次打包的模块hash值都不同
        // 3. [chunkhash] chunk内容的hash, 每一个chunkhash值都不同
        filename: '[name]-[fullhash]-bundle.js',//指定打包后的文件名称
        // publicPath: '/',//指定输出参考根路径 一般在服务器中用
        path: path.resolve(__dirname, 'dist')//指定打包后文件的存放位置,用绝对路径
    },
    module: {
        //配置loader
        rules: [
            // 处理css的loader
            {
                // test: 正则表达式
                test: /\.css$/,
                /*
                use: [
                    'style-loader',
                    'css-loader'
                ]
                */
                // 使用插件的css loader
                use: [
                    //'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        }
                    },
                    'css-loader'
                ]
            },
            // 处理图片 
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 //当图片大小超过limit值后,会生成一个文件,否则生成Data URL
                        }
                    }
                ]
            }
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',// 模板文件
            filename: 'index.html',// 输出的文件名
            inject: 'body',// 脚本写在那个标签里,默认是true(在body结束后)
            hash: true,// 给生成的文件添加一个唯一的hash
            chunks: ['index', 'common', 'conpack']// 需要包含的入口中的chunk
        }),
        new MiniCssExtractPlugin({
            // filename: '[name].[contenthash].css',//使用模版指定输出的css文件的位置和文件名称,模版和出口的模版一致
            filename: 'resource/[name].[fullhash].css'//使用模版指定输出的css文件的位置和文件名称,模版和出口的模版一致
        }),
        new CleanWebpackPlugin(),
    ],
    // webpack-dev-server 提供了一个简单的基于node express的web服务器,能够实时重新加载页面
    devServer: {
        contentBase: './dist',//去哪个文件夹下找静态资源 内容的目录,将dist目录下的文件serve到localhost:8080下运行
        port: 8080,//服务运行的端口
        open: true//自动打开浏览器窗口
    }
};