var express = require('express');
var router = express.Router();
const controllerIdex = require('../Controllers/ControllersIdex')

/* GET home page. */
router.get('/', controllerIdex.home )

router.get('/videoJuegos', controllerIdex.catA )

router.get('/comics', controllerIdex.catB )

router.get('/juegosDeMesa', controllerIdex.catC )



router.get('/cart', controllerIdex.cart )


module.exports = router;
  