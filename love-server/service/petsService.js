const { addPets
} = require("../dao/petsDao.js");

module.exports.addPets = async (shop) => {
    let data = await addPets(shop);
    if(data) {
        return true;
    } else {
        return false;
    }
}