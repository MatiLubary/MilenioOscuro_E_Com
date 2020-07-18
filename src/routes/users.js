var express = require('express');
var router = express.Router();
const userControllers = require ('../Controllers/userControllers')
let {check, validationResult, body} = require ('express-validator')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('users/login')
});

router.get('/login', userControllers.login);

router.get('/register', userControllers.register);

router.post('/register', [
  check('name').isLength({min:3}).withMessage('El Nombre debe contener por lo menos 3 letras'),
  check('email').isEmail().withMessage('El Email debe ser una direccion valida'),
  check('password').isLength({min:8}).withMessage('El Nombre debe contener por lo menos 8 caracteres') ], userControllers.create);

router.get('/profile', userControllers.profile);



module.exports = router;
