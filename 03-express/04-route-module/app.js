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

/*
app.get('/user',(req,res)=>{
    res.send('response User');
})
app.post('/user',(req,res)=>{
    res.send('response User');
})
app.put('/user',(req,res)=>{
    res.send('response User');
})
app.delete('/user',(req,res)=>{
    res.send('response User');
})

app.get('/blog',(req,res)=>{
    res.send('response Blog');
})
app.post('/blog',(req,res)=>{
    res.send('response Blog');
})
app.put('/blog',(req,res)=>{
    res.send('response Blog');
})
app.delete('/blog',(req,res)=>{
    res.send('response Blog');
})
*/

// 处理路由模块化
app.use('/user',user);
app.use('/blog',blog);

app.listen(port,()=>{
    console.log('serve is running at 127.0.0.1:3000')
})