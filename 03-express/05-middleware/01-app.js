const express = require('express'); // 引入express
const port = 3000; // 定义端口号
// 创建express实例
const app = express();

// 引入模块化 模块user
const user = require('./router/user')
// 引入模块化 模块blog
const blog = require('./router/blog')

// 处理静态资源
app.use(express.static('public'));

// 中间件函数1
app.use('/',(req,res,next) => {
    console.log('to so somethingA');
    next(); // 必须调用next方法, 程序才能继续向下进行
})
// 中间件函数2  程序里可以写多个中间件函数
app.use('/',(req,res,next) => {
    console.log('to so somethingB');
    next(); // 必须调用next方法, 程序才能继续向下进行
})

app.get('/',(req,res)=>{
    res.send('response');
})
app.post('/',(req,res)=>{
    res.send('response');
})
app.put('/',(req,res)=>{
    res.send('response');
})
app.delete('/',(req,res)=>{
    res.send('response');
})

app.listen(port,()=>{
    console.log('serve is running at 127.0.0.1:3000')
})