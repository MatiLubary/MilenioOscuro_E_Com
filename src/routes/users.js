var express = require('express');
var router = express.Router();
const userControllers = require ('../Controllers/userControllers')
let {check, validationResult, body} = require ('express-validator')
const users = require("../data/users.json")


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('users/login')
});

router.get('/login', userControllers.login);
router.post('/login', [
  check('email').isEmail().withMessage('El Email debe ser una direccion valida'),
  check('password').isLength({min:8}).withMessage('El Nombre debe contener por lo menos 8 caracteres') ], userControllers.processLogin);

router.get('/register', userControllers.register);
router.post('/register', [
  check('name').isLength({min:3}).withMessage('El Nombre debe contener por lo menos 3 letras'),
  check('email').isEmail().withMessage('El Email debe ser una direccion valida'),
  check('password').isLength({min:8}).withMessage('La contraseña debe contener por lo menos 8 caracteres') ], userControllers.create);

router.get('/profile', userControllers.profile);



module.exports = router;
