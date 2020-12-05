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
    const user = UserModel({name:'Mary',age:135,major:'Science'});
    /*
    // save的使用方法一
    user.save((err,docs) => {
        if(err){
            console.log('insert err :::',err);
        }else{
            console.log('insert success :::',docs)
        }
    })
    // save的使用方法二 (save的返回值是一个promise对象)
    user.save()
    .then((docs) =>{
        console.log('create success::',docs);
    })
    .catch(err => {
        console.log('create err::',err)
    })
    */
    /*
    UserModel.create([
        {
            name:'Tom',age:18,major:'science'},
        {
            name:'Bob',age:38,major:'math'}
    ])
    .then((docs) =>{
        console.log('create success::',docs);
    })
    .catch(err => {
        console.log('create err::',err)
    })
     */

    // 生成随机数函数
    let getRandom = (min,max) => { return Math.round( min + Math.random() * (max - min) )};
    let names = ['Leo','Bob','Amy','Mike','Jack','Smith'];
    let majors = ['Computer','Music','Math','JavaScript','Html','css'];

    let getName = () => {
        return names[getRandom(0,names.length - 1)];
    }
    let getMajor = () => {
        return majors[getRandom(0,names.length - 1)];
    }

    let users = []
    for(let i = 0;i<40;i++){
        let obj = {};
        let age = getRandom(0,50);
        obj.name = getName();
        obj.age = age;
        obj.major = getMajor();
        users.push(obj);
    }
    // console.log(users);

/*
    // 新增
    UserModel.insertMany(users)
    .then((docs) =>{
        console.log('create success::',docs);
    })
    .catch(err => {
        console.log('create err::',err)
    })

 */


    //获取去重后的值
    UserModel.distinct('name',(err,docs)=>{
        if(err){
            console.log('find err::',err)
        }else{
             console.log('find success ::',docs)
        }
    })


});