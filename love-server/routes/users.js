var express = require('express');
var router = express.Router();

const {getUserMesById,login}=require("../service/usersService");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/getUserMesById', async function (req, res, next) {
  res.send(await getUserMesById(req.body));
});
//登录
router.post('/login', async function (req, res, next) {
  let data = await login(req.body);
  res.send(data);
});

module.exports = router;
