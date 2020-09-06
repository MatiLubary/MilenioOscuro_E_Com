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

//--------------------------------buscador---------------------------------------//

router.get('/search', controllerIdex.search)

/* router.get('/oferta', controllerIdex.offer) */
//Rutas de Footer
router.post('/emails', controllerIdex.emailOfert)
router.get('/contact', controllerIndex.quienes)
router.get('/envios', controllerIndex.quienes)
router.get('/quienes', controllerIndex.quienes)
router.get('/metodopago', controllerIndex.quienes)




module.exports = router;
  