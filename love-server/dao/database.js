//连接数据库
const mongoose = require('mongoose');
require("./models/goodsModel");
require("./models/usersModel");
require("./models/petModel");
require("./models/masterModel");
require("./models/ordersModel");
require("./models/serviceModel");
require("./models/shopModel");
const dbURI = 'mongodb://localhost/F57';  // 其中 F57 为连接的数据库名称，可以改变
mongoose.connect(dbURI, { useNewUrlParser: true });
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
