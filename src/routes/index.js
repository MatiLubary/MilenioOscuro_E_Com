var express = require('express');
var router = express.Router();
const controllerIdex = require('../Controllers/indexControllers')
const archivoEmail = require('../data/emailsParaOferta.json')
const path = require('path')
const emailsFilePath = path.join(__dirname, '../data/emailsParaOferta.json')
const fs = require('fs')

/* GET home page. */
router.get('/', controllerIdex.home )

//-----------------------------------------------------------------//

router.post('/', function(req, res){
   
archivoEmail.push(req.body.email)

fs.writeFileSync( emailsFilePath , JSON.stringify(archivoEmail , null, 4))


   res.redirect('/')
} )

//-----------------------------------------------------------------------//


router.get('/cart', controllerIdex.cart )


module.exports = router;
  