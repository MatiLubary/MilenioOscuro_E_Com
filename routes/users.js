var express = require('express');
var router = express.Router();
const userControllers = require ('../Controllers/userControllers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("hola")
});

router.get('/login', userControllers.login)

router.get('/register', userControllers.register)

module.exports = router;
