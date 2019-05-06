const mongoose = require('mongoose');
// 订单集合
const ordersSchema = new mongoose.Schema({
    // 关联宠主id
    masterId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'masterModel'
    },
    // 关联门店id
    shopId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shopModel'
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

mongoose.model('ordersModel', ordersSchema, "orders");

module.exports.ordersModel = mongoose.model('ordersModel');