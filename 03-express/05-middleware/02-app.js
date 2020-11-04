const express = require('express'); // 引入express
const port = 3000; // 定义端口号
// 创建express实例
const app = express();
// 引入nodejs的核心模块 querystring（查询字符串）
const querystring = require('querystring');

// 引入模块化 模块user
const user = require('./router/user')
// 引入模块化 模块blog
const blog = require('./router/blog')

// 处理静态资源
app.use(express.static('public'));


app.post('/',(req,res)=>{
    // 不使用中间件处理 post 请求的参数1
    /*
    let body = '';
    req.on('data',(chunk) => {
        body += chunk;
    })
    req.on('end',() => {
        console.log(querystring.parse(body));
    })
    */

    res.send('response');
})


app.listen(port,()=>{
    console.log('serve is running at 127.0.0.1:3000')
})