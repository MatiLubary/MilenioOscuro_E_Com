var express = require('express');
var router = express.Router();
const controllersProducts = require('../Controllers/productsControllers')
const multer = require('multer')
const path = require('path')




var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images' )
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })


router.get('/detail/:id' , controllersProducts.detail)

router.post('/alta' ,  controllersProducts.alta)



router.get('/developers' , controllersProducts.api)

/* router.post('/alta' , upload.any() ,  controllersProducts.dadoDeAlta)  */



module.exports = router