const express = require('express'); // 引入express
const port = 3000; // 定义端口号
// 创建express实例
const app = express();

// 处理静态资源
app.use(express.static('public'));

app.get('/',(req,res)=>{
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