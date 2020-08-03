const fs = require('fs')
const archivo = require('../data/productos.json')
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/productos.json');
const multer = require('multer')
const db = require('../../db/models')

constrollersProducts = {





        detail: function (req, res) {

               /*  let productosDetalle = archivo.find(function (producto) {
                        return producto.id == req.params.id
                }) */

                db.products.findByPk(req.params.id)
                .then(function(resultado){
                        res.render('products/productsDetail', {  producto: resultado , usuario : req.session.usuario})
                })



               

               

        },

         alta: function (req, res) {


                res.send(req.body)
        }
/* 
                res.render('products/productsAlta' , {usuario : req.session.usuario}) */
       /*  }, */






        /* dadoDeAlta: function (req, res, next) {

                let nuevoProducto = req.body

                nuevoProducto.id = archivo.length + 1

                let nuevo = archivo.length + 1

                    console.log(req.files)

                    nuevoProducto.image = "/" + req.body.category + "/" + req.files[0].filename 


                archivo.push(nuevoProducto)

                fs.writeFileSync(productsFilePath, JSON.stringify(archivo, null, 4))


                





                res.redirect("/")
        }
 */


     
                
        


        


}

module.exports = constrollersProducts