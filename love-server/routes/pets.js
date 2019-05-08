var express = require('express');
var router = express.Router();

const { addPets
} = require("../service/petsService.js");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//添加宠物
router.post('/addPets', async function(req, res, next) {
  // console.log(req.body);
  res.send(await addPets(req.body));
});

module.exports = router;