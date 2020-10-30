const express = require('express'); // 引入express
const router = express.Router(); // 生成路由模块化实例

router.get('/',(req,res) => {
    res.send('response Blog');
})
router.put('/',(req,res) => {
    res.send('response Blog');
})
router.delete('/',(req,res) => {
    res.send('response Blog');
})
router.post('/',(req,res) => {
    res.send('response Blog');
})

module.exports = router; // 导出模块