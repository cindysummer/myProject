const { getUserMesById } = require("../dao/usersDao");
module.exports.getUserMesById = async (userId) => {
    let data=await getUserMesById(userId);
    const {goodsId,serviceId,petId}=data[0];
    const goodsArr=goodsId.map(item=>item.goodsName);
    return goodsArr;
}