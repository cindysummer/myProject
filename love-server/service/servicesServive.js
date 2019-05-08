// 服务管理
// 逻辑层
let { addServices } = require("../dao/servicesDao");
module.exports.addServices = async function (user) {
    let data = await addServices(user);
    if (data.length > 0) {
        return false;
    } else {
        return true;
    }
console.log(data);
//  await addServices(user);
console.log(data);

}