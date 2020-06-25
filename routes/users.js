var express = require('express');
var router = express.Router();
const userControllers = require ('../Controllers/userControllers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', userControllers.login)

module.exports = router;
