// webpack.prod.js
const { merge } = require('webpack-merge');// 合并webpack的方法
const common = require('./webpack.common.js');// 引入common配置

module.exports = merge(common, {
    mode: 'production'
});