const fs = require('fs')
const archivo = require('../data/productos.json')
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/productos.json');
const multer = require('multer')
const db = require('../../db/models')

constrollersProducts = {





        detail: function (req, res) {

                let productosDetalle = archivo.find(function (producto) {
                        return producto.id == req.params.id
                })



               

                res.render('products/productsDetail', {  producto: productosDetalle , usuario : req.session.usuario})

        },

        /* alta: function (req, res) {


                db.products.findAll()
                .then(function(resultado){
  
                        for ( let  product of resultado){
                                console.log(product.price)
                        }
                            res.send("listo")
                })
               
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