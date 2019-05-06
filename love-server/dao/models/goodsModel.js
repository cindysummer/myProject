const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    //商品名称
    goodsName: String,
    // 品类（狗粮、猫粮、猫砂、玩具等）
    goodsType: String, 
    // 材质（玩具等用品）、制作方法（粮食的烘培、膨化等）
    goodsMaterial: String,
    // 适用规格（适用幼犬、成犬、幼猫等）
    goodsCanFor:String,
    // 专属规格（贵宾专用、比熊专用等）
    goodsOnlyFor:String,
    // 包装规格（1KG、5KG等）
    goodsSize:String,
    // 口味（鸡肉味、牛肉味）
    goodsTaste:String,
    // 特殊功用（美毛、去泪痕）
    goodsSpecial:String,
    // 产地（国产、广州、加拿大、美国等）
    goodsRegion:String,
    // 生产日期
    goodsDate:String,
    // 保质期
    goodsTime:String,
    // 供应商
    goodsSupplier:String,
    // 特色说明
    goodsIntro:String,
    // 价格（基准价格）
    goodsPrice:Number,
    // 图片
    goodsImg:[{
        type:String
    }]
})

mongoose.model('goodsModel', goodsSchema, "goods");

module.exports.goodsModel = mongoose.model('goodsModel');