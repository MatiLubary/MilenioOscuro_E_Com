var express = require('express');
var router = express.Router();
const creditCardController = require('../Controllers/creditCardControllers')
const middlewareAcceso = require('../middleware/accesoUsuarios')

router.get ('/creditCard', middlewareAcceso, creditCardController.credit)


router.get ('/resumen', middlewareAcceso ,  creditCardController.resumen)

module.exports = router;