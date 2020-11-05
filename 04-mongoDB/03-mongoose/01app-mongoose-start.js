// 引入mongoose
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true,useUnifiedTopology: true});
// 生成db(mongoose实例 , 监听数据库连接成功与失败)
const db = mongoose.connection;
// 异常优先
db.on('error', () => {
    console.log('connect mongodb err::',err);
    throw err;
});
// 生成db成功后的函数
db.once('open', function() {
    console.log('connect mongodb success !!');


    // 4.1生成文档模型
    const UserSchema = new mongoose.Schema({
        name:String,
        age:Number,
        major:String
    })
    // 4.2根据文档模型生成集合
    const UserModel = mongoose.model('user', UserSchema);
    // 4.3根据生成的集合进行数据库操作:CRUD
    // 新增
    /*
    const user = UserModel({name:'Bob',age:135,major:'Science'});
    user.save((err,docs) => {
        if(err){
            console.log('insert err :::',err);
        }else{
            console.log('insert success :::',docs)
        }
    })
    */
    // 查找
    /*
    UserModel.findOne({name:'Tom'},(err,docs) => {
        if(err){
            console.log('find err :::',err);
        }else{
            console.log('find success :::',docs)
        }
    })
    */
    // 更新 更新时可以运用查询操作符()
    /*
    UserModel.updateOne({name:'Leo'},{$set:{age:34}},(err,docs) => {
        if(err){
            console.log('update err :::',err);
        }else{
            console.log('update success :::',docs)
        }
    })
     */
    // 删除
    UserModel.deleteOne({name:'Tom'},(err,docs) => {
        if(err){
            console.log('delete err :::',err);
        }else{
            console.log('delete success :::',docs)
        }
    })
});