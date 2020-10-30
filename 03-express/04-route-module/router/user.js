const express = require('express'); // 引入express
const router = express.Router(); // 生成路由模块化实例

router.get('/',(req,res) => {
    res.send('response User');
})
router.put('/',(req,res) => {
    res.send('response User');
})
router.delete('/',(req,res) => {
    res.send('response User');
})
router.post('/',(req,res) => {
    res.send('response User');
})

module.exports = router; // 导出模块