const fs = require('fs')
const archivo = require('../data/productos.json')
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/productos.json');
const multer = require('multer')

constrollersProducts = {





        detail: function (req, res) {

                let productosDetalle = archivo.find(function (producto) {
                        return producto.id == req.params.id
                })



                console.log(productosDetalle)

                res.render('products/productsDetail', {  producto: productosDetalle , usuario : req.session.usuario})

        },

        alta: function (req, res) {

                req.session.usuario = "juan"

                res.render('products/productsAlta' , {usuario : req.session.usuario})
        },

        dadoDeAlta: function (req, res, next) {

                let nuevoProducto = req.body

                nuevoProducto.id = archivo.length + 1

                let nuevo = archivo.length + 1



                archivo.push(nuevoProducto, nuevoProducto.images = req.files[0].filename)

                fs.writeFileSync(productsFilePath, JSON.stringify(archivo, null, 4))


                console.log(archivo)





                res.send("see")
        }



     
                
        


        


}

module.exports = constrollersProducts