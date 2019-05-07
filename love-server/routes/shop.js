var express = require('express');
var router = express.Router();

const { addShop } = require("../service/shopService");
const { uploadFile } = require("../util/upload");
// 新增门店
router.post('/addShop', async function (req, res, next) {
    res.send(await addShop(req.body));
});
//营业执照图片上传
router.post('/addShopLicenceImg', async function (req, res, next) {
    let result = await uploadFile(req, res, {
        fileType: "ShopLicenceImg", //图片保存文件名
        path: './public/images' //保存路径
    });
    res.send(result)
});
// 头图上传（门店店招图片）
router.post('/addShopImg', async function (req, res, next) {
    let result = await uploadFile(req, res, {
        fileType: "ShopImg", //图片保存文件名
        path: './public/images' //保存路径
    });
    res.send(result)
});
module.exports = router;
