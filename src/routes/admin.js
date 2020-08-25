const express = require('express')
const router = express.Router()

const {response} = require('express')
const multer = require('multer')
const path = require('path')
let {check, validationResult, body} = require ('express-validator') 
/* 
const emailYpassMiddleware = require('../middleware/emailYPassword') */
const adminControllers = require('../Controllers/adminControllers')
const adminMiddleware = require('../middleware/accesoAdmin')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({
  storage: storage
})





router.get('/',  adminControllers.products)

//---------------------------------------------EDITAR PRODUCTO-------------------------------//

router.get('/edit/:id', adminControllers.edit)
router.post('/edit/:id',[ upload.any() , /* emailYpassMiddleware, */ check('name').isLength({min:5}).withMessage("debe tener al menos 5 caracteres"),check("description").isLength({min:20}).withMessage("debe tener al menos 20 caracteres") ],  adminControllers.update)

//-------------------------------------------SUBIR UN NUEVO PRODUCTO----------------------//

router.get('/alta', adminControllers.create)
router.post('/alta',[upload.any(), check("name").isLength({min : 5}).withMessage("debe tener al menos 5 caracteres"), check("description").isLength({min : 20}).withMessage("debe tener al menos 20 caracteres")], adminControllers.store)

//-------------------------------ELIMINAR PRODUCTO---------------------------------------//

router.delete('/delete/:id', adminControllers.delete)


module.exports = router