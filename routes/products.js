var express = require('express');
var router = express.Router();
const controllersProducts = require('../Controllers/controllersProducts')



router.get('/detail' , controllersProducts.detail)

router.get('/alta' , controllersProducts.alta)

module.exports = router