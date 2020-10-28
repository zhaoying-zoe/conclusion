const express = require('express'); // 引入express
const port = 3000; // 定义端口号
// 创建express实例
const app = express();
const url = require('url');
// 处理静态资源
app.use(express.static('public'));

// 127.0.0.1:3000/?name=tom&age=18
app.get('/',(req,res)=>{
    /*
    // nodejs 核心模块(url) 获取参数
    const query = url.parse(req.url,true);
    console.log(query.query);
    */
    // express 获取参数(get方法的第一种传参)
    const query = req.query;
    console.log(query);
    res.send('get方法的第一种传参');
})

// 127.0.0.1:3000/?name=tom&age=18
app.get('/name/:nameId/age/:ageId',(req,res)=>{
    // express 获取参数(get方法的第二种传参)
    const query = req.params;
    console.log(query);
    res.send('get方法的第二种传参');
})

app.listen(port,()=>{
    console.log('serve is running at 127.0.0.1:3000')
})