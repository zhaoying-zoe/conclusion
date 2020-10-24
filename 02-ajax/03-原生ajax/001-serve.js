// 1. 引入express
const express = require('express');
// 2. 创建应用对象
const app = express();
// 3. 创建路由规则
// req 是对请求报文的封住
// res 是对响应报文的封装
app.get('/serve',(req,res)=>{
    // 设置响应头
    res.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    res.send('Hello Ajax');
})
// 4.监听端口,启动服务
app.listen(3000,()=>{
    console.log('server is running at http://127.0.0.1:3000');
});