const mongoose = require('mongoose');
// 宠物集合
const petSchema = new mongoose.Schema({
    // 名字
    petName:String,
    // 品类(猫、狗类)
    petType:String,
    // 种类（泰迪，比熊等）
    petKind:String,
    // 颜色
    petColor:String,
    // 出生日期（年月即可）
    petBirth:String,
    // 性格（）温驯、狂野、攻击性
    petNature:String
})

mongoose.model('petModel', petSchema, "pet");
