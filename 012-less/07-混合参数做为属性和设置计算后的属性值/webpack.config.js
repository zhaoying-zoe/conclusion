// webpack.config.js
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    // devtool: 选择一种 source map 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。
    devtool: 'inline-source-map',
    entry: { //对象写法指定需要打包的入口文件
        //chunk名称:入口文件路径
        'index': './src/index.js'
    },
    output: {
        filename: '[name]-[fullhash]-[chunkhash].bundle.js',//指定打包后的文件名称
        publicPath: '/',//指定输出参考根路径
        path: path.resolve(__dirname, 'dist')//指定打包后文件的存放位置,用绝对路径
    },
    module: {
        //配置loader
        rules: [
            // 处理css的loader
            {
                test: /\.css$/,
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
            //处理less 需要css-loader和less-loader
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // strictMath: false,// 严格模式
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',//模板文件
            filename: 'index.html',//输出的文件名
            //inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
            hash: true,//给生成的文件添加一个唯一的hash
            chunks: ['index']//需要包含的入口中的chunk
        }),
        new MiniCssExtractPlugin({
            filename: 'resource/[name].[fullhash].css'//使用模版指定输出的css文件的位置和文件名称,模版和出口的模版一致
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',//内容的目录,将dist目录下的文件serve到localhost:8080下运行
        port: 8080,//服务运行的端口
        open: true//自动打开浏览器窗口
    }
};