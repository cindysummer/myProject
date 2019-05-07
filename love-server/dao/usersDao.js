const mongoose = require("mongoose");
module.exports.getUserMesById = async (userId) => {
    return await mongoose.model("usersModel").find(userId)
        .populate("goodsId")
        .populate("serviceId")
        .populate("petId")
}