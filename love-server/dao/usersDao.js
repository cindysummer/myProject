const mongoose = require("mongoose");
module.exports.getUserMesById = async (userId) => {
    return await mongoose.model("usersModel").find(userId)
        .populate("goodsId")
        .populate("serviceId")
        .populate("petId")
}

//登录
module.exports.login = async function (user) {
    return await mongoose.model("usersModel").find(user);
}