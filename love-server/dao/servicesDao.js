// 服务管理
// 数据层 
const mongoose = require("mongoose");
module.exports.addServices = async function (data) {
    console.log(data);
    return await mongoose.model("serviceModel").create(data);
}