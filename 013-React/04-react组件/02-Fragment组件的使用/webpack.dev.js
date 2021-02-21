// webpack.dev.js

const { merge } = require('webpack-merge');// 合并webpack的方法
const common = require('./webpack.common.js');// 引入common配置

module.exports = merge(common, {
    mode: 'development',
    // devtool: 选择一种 source map 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',//内容的目录,将dist目录下的文件serve到localhost:8080下运行
        port: 8080,//服务运行的端口
        open: true//自动打开浏览器窗口
    }
})