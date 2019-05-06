var express = require('express');
var router = express.Router();

const { addShop } = require("../service/shopService");
// 新增门店
router.post('/addShop', async function (req, res, next) {
    res.send(await addShop(req.body));
});

module.exports = router;
