const archivo = require('../data/productos.json')
const path = require('path')
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../data/productos.json');
const db = require('../../db/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let {check, validationResult, body} = require ('express-validator') 


adminControllers = {


    products: function (req, res) {

       /*  res.render('admin/adminProducts', {
            productos: archivo
        }) */

           db.products.findAll()
           .then(function(productos){
               res.render('admin/adminProducts' , {productos : productos , toThousand})
           })


    },

    edit: function (req, res) {

        /* let producto = archivo.find(function (producto) {
            return producto.id == req.params.id
        })

        res.render('admin/editProduct', {
            usuario: req.session.usuario,
            producto: producto
        }) */


   
      db.products.findByPk(req.params.id)
      .then(function(producto){

        res.render('admin/editProduct', {
            usuario: req.session.usuario,
            producto: producto,
            
        })
      })
   
   
   
   
   
   
   
   
   
   
    },

    update: function (req, res, next) {

        var errors = (validationResult(req))
      
       
        if( errors.isEmpty()){
           
        if(req.files.filename != undefined){
        
               
            db.products.update({
                name : req.body.name ,
                price : req.body.price ,
                description : req.body.description ,
                image : req.files[0].filename ,
                category  : req.body.category,
                offer : req.body.offer,
                newprice : req.body.newprice
            } , {
                where : {
                    id : req.params.id
                }
            })
    
             res.redirect('/admin')

        } else {
            db.products.update({
                name : req.body.name ,
                price : req.body.price ,
                description : req.body.description ,
                offer : req.body.offer,
                category  : req.body.category,
                newprice : req.body.newprice

            } , {
                where : {
                    id : req.params.id
                }
            })
    
             res.redirect('/admin')
        }
    } else {
        db.products.findByPk(req.params.id)
      .then(function(producto){

        res.render('admin/editProduct', {
            usuario: req.session.usuario,
            producto: producto,
            errores : errors.errors
            
        })
      })
   
        
    
    }

    



        
    },

    create: function (req, res) {



        res.render('admin/productsAlta', {
            usuario: req.session.usuario
        })


    },

    store: function (req, res, next) {

        /* let nuevoProducto = req.body

        nuevoProducto.id = archivo.length + 1

        let nuevo = archivo.length + 1

        console.log(req.files)

        nuevoProducto.image = "/" + req.body.category + "/" + req.files[0].filename

console.log(req.files)
        archivo.push(nuevoProducto)

        fs.writeFileSync(productsFilePath, JSON.stringify(archivo, null, 4))


        res.redirect("/") */


        var errors = validationResult(req)

       
        if( errors.isEmpty()){
            
        db.products.create({
            name : req.body.name ,
            price : req.body.price ,
            description : req.body.description ,
            image : req.files[0].filename ,
            category  : req.body.category,
            offer : req.body.offer,
            newprice : req.body.newprice
        })
    } else {
        res.render('admin/productsAlta', {
            usuario: req.session.usuario,
            errores : errors.errors
            
        })

    }

        res.redirect("/admin") 









    },

    delete: function (req, res) {

        db.products.destroy({
            where : {
                id : req.params.id
            }
        })

         res.redirect("/admin")
    }

















}


module.exports = adminControllers