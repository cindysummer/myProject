const mongoose = require('mongoose');
// 用户集合
const usersSchema = new mongoose.Schema({
    //登录名称
    userAccount: String,
    // 密码
    userPwd: String,
    // 手机号
    userPhone:String,
    // 邮箱
    userEmail:String,
    // 姓名
    userName:String,
    // 角色，0默认为门店管理员，1为平台管理员
    userType: {
        type: String, 
        default: "0"
    },
    // 状态，0为申请中，1为可用，2为不可用
    userStatus:{
        type: String, 
        default: "1"
    },
    // 关联商品id
    goodsId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goodsModel'
    }],
    // 关联服务id
    serviceId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'serviceModel'
    }],
    // 关联宠物id
    petId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'petModel'
    }]
})

mongoose.model('usersModel', usersSchema, "users");

module.exports.usersModel = mongoose.model('usersModel');