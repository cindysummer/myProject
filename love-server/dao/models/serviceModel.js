const mongoose = require('mongoose');
// 服务集合
const serviceSchema = new mongoose.Schema({
    //名称
    serviceName: String,
    // 服务类别
    serviceType:String,
    // 排期
    serviceSchedule: String,
    // 适用规格(按体重范围等)
    serviceCanFor:String,
    // 服务规格（精修，普修等）
    serviceDetial:String,
    // 服务员等级(普通、高级服务价格不同)
    serviceLevel:Number,
    // 耗时
    serviceTime: String,
    // 价格
    servicePrice:Number
})

mongoose.model('serviceModel', serviceSchema, "service");
