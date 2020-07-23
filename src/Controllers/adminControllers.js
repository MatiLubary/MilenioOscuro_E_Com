const archivo = require('../data/productos.json')
const path = require('path')
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../data/productos.json');

adminControllers = {


    products: function (req, res) {

        res.render('admin/adminProducts', {
            productos: archivo
        })

    },

    edit: function (req, res) {

        let producto = archivo.find(function (producto) {
            return producto.id == req.params.id
        })

        res.render('admin/editProduct', {
            usuario: req.session.usuario,
            producto: producto
        })

    },

    update: function (req, res, next) {


        res.send(req.body)
    },

    create: function (req, res) {



        res.render('admin/productsAlta', {
            usuario: req.session.usuario
        })

    },

    store: function (req, res, next) {

        let nuevoProducto = req.body

        nuevoProducto.id = archivo.length + 1

        let nuevo = archivo.length + 1

        console.log(req.files)

        nuevoProducto.image = "/" + req.body.category + "/" + req.files[0].filename

console.log(req.files)
        archivo.push(nuevoProducto)

        fs.writeFileSync(productsFilePath, JSON.stringify(archivo, null, 4))


        res.redirect("/")
    },

    delete: function (req, res) {


        res.send("eliminado")
    }

















}


module.exports = adminControllers