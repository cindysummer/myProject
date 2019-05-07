var express = require('express');
var router = express.Router();

const {getUserMesById}=require("../service/usersService");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/getUserMesById', async function (req, res, next) {
  res.send(await getUserMesById(req.body));
});

module.exports = router;
