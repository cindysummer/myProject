const mongoose = require('mongoose');
// 宠主集合
const masterSchema = new mongoose.Schema({
    //电话号码
    memberPhone: String,
    // 昵称
    memberAcount: String,
    // 真实姓名
    memberName:String,
    // 会员卡
    menberCard:String,
    // 头图
    memberImg:String,
    // 送货地址
    memberAdd: String,
    //区域
    memberArea:String,
    // 积分
    memberPoint:String,
    // 宠物id
    petId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'petModel'
    }]
})

mongoose.model('masterModel', masterSchema, "master");
