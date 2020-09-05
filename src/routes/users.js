var express = require('express');
var router = express.Router();
const userControllers = require ('../Controllers/userControllers')
const emailYPassword = require('../middleware/emailYPassword')
let {check, validationResult, body} = require ('express-validator')






router.get('/login', userControllers.login);
router.post('/login', [
  check('email').isEmail().withMessage('El Email debe ser una direccion valida'),
  check('password').isLength({min:8}).withMessage('El Nombre debe contener por lo menos 8 caracteres') ], userControllers.processLogin);

router.get('/register', userControllers.register);
router.post('/register', emailYPassword.validar , userControllers.create);

router.get('/profile', userControllers.profile);

router.get("/cerrar" , userControllers.cerrarSesion)

router.get('/developers' , userControllers.api)

module.exports = router;
