const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../../db/models')

controllerIndex = {

  home: function (req, res, next) {

    

    let prodsCategoriaX = products.filter(product => product.category == req.query.categoria)

    let cat = req.query.categoria



    if (req.query.categoria) {

      db.products.findAll({
        limit: 10,
        where: {
          category : req.query.categoria
        }
      }).then(function (products) {
        res.render('index/indexFiltrados', {
          products: products,
          cat,
          usuario: req.session.usuario
        })
      })

    }


    db.products.findAll({

      offset: 2,
      limit: 5
    })
      .then(function (products) {
        res.render('index', {
          products: products,
          usuario: req.session.usuario
        })

      })


  },


  cart: function (req, res, next) {


    if (req.params.id != undefined) {

      if (req.session.usuario != undefined) {



        db.users.findAll({
            include: [{
              association: "carts"
            }]
          })
          .then(function (carrito) {

            let elIndicado = carrito.find(function (usuario) {
              if (usuario.email == req.session.usuario.email) {
                return usuario
              }
            })

            for (let usuario of elIndicado.carts) {
              var idCarrito = usuario.id
            }

            db.users.findAll({
                where: {
                  email: req.session.usuario.email
                }
              })
              .then(function (usuario) {
                console.log(usuario)
                db.products.findByPk(req.params.id)
                  .then(function (producto) {

                    db.cartsProducts.create({
                      qty: 1,
                      price: producto.price,
                      product_id: producto.id,
                      cart_id: idCarrito

                    })

                  })
              })

            res.redirect("/")



          })

      } else {
        res.redirect("/users/login")
      }


    } else {

      if (req.session.usuario != undefined) {



        db.users.findAll({
            include: [{
              association: "carts"
            }]
          })
          .then(function (carrito) {

            let elIndicado = carrito.find(function (usuario) {
              if (usuario.email == req.session.usuario.email) {
                return usuario
              }
            })



            for (let usi of elIndicado.carts) {
              console.log(usi)
              var idBusqueda = usi.id
            }

            db.cartsProducts.findAll({
                include: [{
                  association: "products"
                }]
              })
              .then(function (productoCarrito) {

                let carritoActual = productoCarrito.filter(function (productos) {
                  return productos.cart_id == idBusqueda
                })


                let totalCarro = carritoActual.reduce(function (acum, precio) {
                  return acum + precio.price
                }, 0)

                db.carts.update({
                  total: totalCarro
                }, {
                  where: {
                    id: idBusqueda
                  }
                })






                res.render('index/cart', {
                  productos: carritoActual,
                  usuario: req.session.usuario,
                  totalCarrito: totalCarro
                })

              })




          })


      } else {
        res.redirect("/users/login")
      }

    }

  },












  contact: function (req, res, next) {
    res.render('index/contact', {
      usuario: req.session.usuario
    })
  },
  envios: function (req, res, next) {
    res.render('index/envios', {
      usuario: req.session.usuario
    })
  },
  quienes: function (req, res, next) {
    res.render('index/quienes', {
      usuario: req.session.usuario
    })
  },
  metodopago: function (req, res, next) {
    res.render('index/metodopago', {
      usuario: req.session.usuario
    })
  }

}


module.exports = controllerIndex