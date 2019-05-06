const { addShop } = require("../dao/shopDao");
module.exports.addShop = async (shop) => {
    let data = await addShop(shop);
    if(data) {
        return true;
    } else {
        return false;
    }
}