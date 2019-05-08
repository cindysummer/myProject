// 页面层 服务管理
var express = require('express');
var router = express.Router();
const { addServices } = require("../service/servicesServive");
  
/* GET home page. */
router.post('/addServices',async function(req, res, next) {
  // console.log(req.body);
  
  res.send(await addServices(req.body));
});

module.exports = router;