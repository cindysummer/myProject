const mongoose = require('mongoose');
// 门店集合
const shopSchema = new mongoose.Schema({
    //名称
    shopName: String,
    // 营业执照
    shopLicenceNum: String,
    // 营业执照图片
    shopLicenceImg: String,
    // 地址
    shopAdd: String,
    //法人
    shopCorporate: String,
    // 联系电话
    shopTel: String,
    // 头图
    shopImg: String,
    // 特色
    shopFeature: String,
    // 店员
    shopEmployee: [{
        // 姓名
        empName: String,
        // 职级
        empLevel: String,
        // 电话
        empPhone: String
    }],
    // 状态，0为未审核，1为已审核，2为已关闭
    shopStatus:{
        type: String, 
        default: "0"
    },
    // 关联门店管理员id
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersModel'
    }
})

mongoose.model('shopModel', shopSchema, "shop");

module.exports.shopModel = mongoose.model('shopModel');