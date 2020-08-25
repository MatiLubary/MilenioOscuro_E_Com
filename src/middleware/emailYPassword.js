const { check } = require("express-validator")




module.exports = function (req, res, next) {

    check('name').isLength({min:5}).withMessage("debe tener al menos 5 caracteres")

   
  
}