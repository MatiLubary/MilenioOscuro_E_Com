const archivo = require('../data/productos.json')
const path = require('path')
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../data/productos.json');
const db = require('../../db/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let {
    check,
    validationResult,
    body
} = require('express-validator')

 var usuarioPedido 

adminControllers = {


    products: function (req, res) {

        usuarioPedido = ""

        if(req.query.producto == "" || req.query.producto == undefined){
            db.products.findAll()
            .then(function (productos) {
                res.render('admin/adminProducts', {
                    productos: productos,
                    toThousand
                })
            })
            
        }else {
            db.products.findAll({
                where : {
                    name : {[db.Sequelize.Op.substring] : req.query.producto}
                }
            })
            .then(function (productos) {
                res.render('admin/adminProducts', {
                    productos: productos,
                    toThousand
                })
            })
        }

        


    },

    edit: function (req, res) {

        db.products.findByPk(req.params.id)
            .then(function (producto) {

                res.render('admin/editProduct', {
                    usuario: req.session.usuario,
                    producto: producto,
                    prodEnCarrito: req.session.cantProdCarro

                })
            })

    },

    update: function (req, res, next) {



        if (req.body.offer != undefined) {
            var oferta = "on"
        } else {
            var oferta = "off"
        }


        var errors = (validationResult(req))


        if (errors.isEmpty()) {

            let product = {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,
                offer: oferta,
                newprice: req.body.newprice
            }

            if (req.files[0] != undefined) {
                product.image = req.files[0].filename

            }
            if (req.files[1] != undefined) {
                product.imagetwo = req.files[1].filename

            }
            db.products.update(
                product, {
                    where: {
                        id: req.params.id
                    }
                })

            res.redirect('/admin')

        } else {
            db.products.findByPk(req.params.id)
                .then(function (producto) {

                    res.render('admin/editProduct', {
                        usuario: req.session.usuario,
                        producto: producto,
                        errores: errors.errors,
                        prodEnCarrito: req.session.cantProdCarro

                    })
                })

        }






    },

    create: function (req, res) {



        res.render('admin/productsAlta', {
            usuario: req.session.usuario,
            prodEnCarrito: req.session.cantProdCarro
        })


    },

    store: function (req, res, next) {

       


        var errors = validationResult(req)


        if (errors.isEmpty()) {

            let product = {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,
                offer: req.body.offer,
                newprice: req.body.newprice
            }

            if (req.files[0] != undefined) {
                product.image = req.files[0].filename

            }
            if (req.files[1] != undefined) {
                product.imagetwo = req.files[1].filename

            }

            
            db.products.create(product)

        } else {
            res.render('admin/productsAlta', {
                usuario: req.session.usuario,
                errores: errors.errors,
                prodEnCarrito: req.session.cantProdCarro

            })

        }

        res.redirect("/admin")









    },

    delete: function (req, res) {

        db.products.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/admin")
    },

    historial: function (req, res) {

      usuarioPedido = req.body.usuarioBuscado



        db.users.findAll({
               include: [{
                    association: "carts",
                    paranoid: false
                }],
                where: {
                    email: req.body.usuarioBuscado
                }
            })
            .then(function (usuarios) {

                var idDeLosCarritos = []

                for (let user of usuarios) {
                    for (let carro of user.carts) {
                        idDeLosCarritos.push(carro.id)
                    }
                }

                db.cartsProducts.findAll({
                        include: [{
                            association: "carts",
                            paranoid: false
                        }, {
                            association: "products"
                        }, ],
                        where: {
                            cart_id: idDeLosCarritos,

                        }
                    })
                    .then(function (result) {

                        

                        res.render('admin/tablaHistorial', {
                            compras: result,
                            nombreUsuario: req.body.usuarioBuscado,
                            toThousand
                        })


                    })

            })

    },

    api : function(req, res){

        db.users.findAll({
            include: [{
                 association: "carts",
                 paranoid: false
             }],
             where: {
                 email: usuarioPedido
             }
         })
         .then(function (usuarios) {

             var idDeLosCarritos = []

             for (let user of usuarios) {
                 for (let carro of user.carts) {
                     idDeLosCarritos.push(carro.id)
                 }
             }

             db.cartsProducts.findAll({
                     include: [{
                         association: "carts",
                         paranoid: false
                     }, {
                         association: "products"
                     }, ],
                     where: {
                         cart_id: idDeLosCarritos,
                         created_at : {[db.Sequelize.Op.substring] : req.query.fecha}

                     }
                 })
                 .then(function (result) {

                     

                    res.render('admin/tablaHistorial', {
                        compras: result,
                        nombreUsuario: usuarioPedido,
                        toThousand
                    })


                 })

         })






        
    }







  





















}


module.exports = adminControllers