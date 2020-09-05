const fs = require('fs');
const path = require('path');

/* const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */
const db = require('../../db/models');
const { sequelize } = require('../../db/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

controllerIndex = {

  home: function (req, res, next) {

    console.log(req.session.cantProdCarro)

    /* let prodsCategoriaX = products.filter(product => product.category == req.query.categoria) */

    let cat = req.query.categoria

    

    if (req.query.categoria) {

      db.products.findAndCountAll({
        offset: Number(req.query.page)*8 || 0,
        limit: 8, 
        where: {
          category : req.query.categoria
        }
      }).then(function (products) {
        res.render('index/indexFiltrados', {
          products: products.rows,
          pagination: {
            firstUrl: '/',
            nextUrl : '/?page=' + (req.query.page ? Number(req.query.page)+ 1 : 1),
            prevUrl :  '?page=' + (req.query.page ? Number(req.query.page) - 1 : 0),
            lastUrl : '?page=' + (parseInt(products.count / 8) - 1)
            
            },
          cat,
          usuario: req.session.usuario,
          prodEnCarrito : req.session.cantProdCarro,
          toThousand
        })
      })

    }


    db.products.findAndCountAll({
      offset: Number(req.query.page)*8 || 0,
      limit: 8, })
      .then(function (products) {
            res.render('index', {
          products: products.rows,
          pagination: {
            firstUrl: '/',
            nextUrl : '/?page=' + (req.query.page ? Number(req.query.page)+ 1 : 1),
            prevUrl :  '?page=' + (req.query.page ? Number(req.query.page) - 1 : 0),
            lastUrl : '?page=' + (parseInt(products.count / 8) - 1)
            },
          usuario: req.session.usuario,
          prodEnCarrito : req.session.cantProdCarro,
          toThousand

        })

      })


  },

  offer : function(req, res){
    
    db.products.findAll({
      where : {
        offer : "on"
      }
    })
    .then(function(resultado){
      res.render('index/ofertas' , {
        products : resultado,
        usuario: req.session.usuario,
        prodEnCarrito : req.session.cantProdCarro,
        toThousand
      })
    })

  },


 search : function(req, res){
   db.products.findAll({
     where : {
       name : {[db.Sequelize.Op.substring] : req.query.search}
     }
   })
   .then(function(resultado){
     console.log(resultado)
    res.render('index/productosBuscados' , {products : resultado,
      usuario: req.session.usuario,
      prodEnCarrito : req.session.cantProdCarro,
      palabraBuscada : req.query.search,
      toThousand})
   })
 },


 emailOfert : function(req, res){

  db.emails.create({
    email : req.body.email
  })

 res.redirect('/')
},










  contact: function (req, res, next) {
    res.render('index/contact', {
      usuario: req.session.usuario,
      prodEnCarrito : req.session.cantProdCarro
    })
  },
  envios: function (req, res, next) {
    res.render('index/envios', {
      usuario: req.session.usuario,
      prodEnCarrito : req.session.cantProdCarro
    })
  },
  quienes: function (req, res, next) {
    res.render('index/quienes', {
      usuario: req.session.usuario,
      prodEnCarrito : req.session.cantProdCarro
    })
  },
  metodopago: function (req, res, next) {
    res.render('index/metodopago', {
      usuario: req.session.usuario,
      prodEnCarrito : req.session.cantProdCarro
    })
  }

}


module.exports = controllerIndex