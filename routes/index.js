var express = require('express');
var router = express.Router();
const controllerIdex = require('../Controllers/ControllersIdex')
/* GET home page. */



router.get('/', controllerIdex.home )

module.exports = router;
