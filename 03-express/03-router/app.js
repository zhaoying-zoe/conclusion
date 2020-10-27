const express = require('express'); // 引入express
const port = 3000; // 定义端口号
// 创建express实例
const app = express();


// 处理静态资源
app.use(express.static('public'));

app.listen(port,()=>{
    console.log('serve is running at 127.0.0.1:3000')
})