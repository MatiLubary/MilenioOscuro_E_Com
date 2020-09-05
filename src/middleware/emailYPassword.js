const { check } = require("express-validator")

 validaciones = {

  validar : [
    check('name').isLength({min:3, max:15}).withMessage('El Nombre debe contener por lo menos 3 letras y maximo 15'),
    check('email').isEmail().withMessage('El Email debe ser una direccion valida'),
    check('password').isLength({min:8}).withMessage('La contraseña debe contener por lo menos 8 caracteres') ]


}


module.exports = validaciones