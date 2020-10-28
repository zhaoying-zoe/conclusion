const express = require('express'); // 引入express
const port = 3000; // 定义端口号
// 创建express实例
const app = express();

// 处理静态资源
app.use(express.static('public'));

app.all('/',(req,res,next) => {
    console.log('this is app.all');
    next();// 必须调用next方法 才能使程序继续执行
})

app.get('/',(req,res,next)=>{
	// 1. 正常的路由请求也可以添加next方法 但是只有调用next方法,
	// 2. 才能向下继续执行代码
	next();
    console.log(res);
},(req,res)=>{
	res.send('response get');
})
app.post('/',(req,res)=>{
    res.send('response post');
})
app.put('/',(req,res)=>{
    res.send('response put');
})
app.delete('/',(req,res)=>{
    res.send('response delete');
})

app.listen(port,()=>{
    console.log('serve is running at 127.0.0.1:3000')
})