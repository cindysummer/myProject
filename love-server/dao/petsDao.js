const mongoose = require("mongoose");
module.exports.addPets = async (shop) => {
    // console.log(shop);
    let pet = await mongoose.model("petModel").create(shop);
    return pet
    // return await cinemasModel.create(shop);
}