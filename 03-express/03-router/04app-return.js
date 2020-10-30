const express = require('express'); // 引入express
const port = 3000; // 定义端口号
// 创建express实例
const app = express();
const url = require('url');
// 处理静态资源
app.use(express.static('public'));

app.get('/',(req,res)=>{
    // res.end('response is ok'); // 可以返回
    // res.end('<div>我是标签</div>'); // 可以返回
    // res.end({name:"tom"}); // 报错 res.end 无法返回对象

    // res.json('return json'); // 可以返回
    // res.json('<div>我是标签</div>'); // 返回的字符串
    // res.json({name:"tom"}); // res.json 专门用来返回对象

    // res.send('return send');
    res.send('<div>我是标签</div>'); // 返回的是标签,但是在前台打印出来是字符串
    // res.send({name:"tom"}); // 返回的是对象
})

app.listen(port,()=>{
    console.log('serve is running at 127.0.0.1:3000')
})