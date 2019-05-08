const { getUserMesById ,login} = require("../dao/usersDao");
module.exports.getUserMesById = async (userId) => {
    let data=await getUserMesById(userId);
    const {goodsId,serviceId,petId}=data[0];
    const goodsArr=goodsId.map(item=>item.goodsName);
    return goodsArr;
}

module.exports.login = async function (user) {
    let data = await login(user);
    if (data.length > 0) {
        return [data.userType,data.userStatus]; //如果存在返回该用户的角色和状态
    } else {
        return ["2","2"];//表示用户不存在
    }
}