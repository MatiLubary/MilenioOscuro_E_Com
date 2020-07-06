var express = require('express');
var router = express.Router();
const creditCardController = require('../Controllers/creditCardControllers')


router.get ('/credit', creditCardController.credit)


module.exports = router;