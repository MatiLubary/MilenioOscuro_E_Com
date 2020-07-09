var express = require('express');
var router = express.Router();
const creditCardController = require('../Controllers/creditCardControllers')


router.get ('/creditCard', creditCardController.credit)


router.get ('/resumen', creditCardController.resumen)

module.exports = router;