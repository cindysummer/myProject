//连接数据库
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/f57';  // 其中 F57 为连接的数据库名称，可以改变
mongoose.connect(dbURI, { useNewUrlParser: true });
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
