const fs = require('fs')
const archivo = require('../data/productos.json')
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/productos.json');
const multer = require('multer')
const db = require('../../db/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

constrollersProducts = {





        detail: function (req, res) {

               /*  let productosDetalle = archivo.find(function (producto) {
                        return producto.id == req.params.id
                }) */

                db.products.findByPk(req.params.id)
                .then(function(resultado){
                     var prodSeleccionado = resultado
               console.log(resultado)
                     db.products.findAll({
                             where : {
                                     offer : "on"
                             }
                     })
                     .then(function(ofertas){
                             var prodRelacionados = ofertas
                             res.render('products/productsDetail', {  producto: resultado , usuario : req.session.usuario ,toThousand , ofertas : prodRelacionados ,prodEnCarrito :  req.session.cantProdCarro })
                        })
                                 

                     
                        
                })


        
               

               

        },

         alta: function (req, res) {


                res.send(req.body)
        } ,


          api : function(req, res){

                db.products.findAndCountAll()
                .then(function(result){
                        
                        res.json(result.rows)
                })
          },
 

                



          



     
                
        


        


}

module.exports = constrollersProducts