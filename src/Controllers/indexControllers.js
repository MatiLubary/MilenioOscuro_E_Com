const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require('../../db/models');
const { sequelize } = require('../../db/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

controllerIndex = {

  home: function (req, res, next) {

    console.log(req.session.cantProdCarro)

    let prodsCategoriaX = products.filter(product => product.category == req.query.categoria)

    let cat = req.query.categoria

    let page = req.query.page

    

    

    if (req.query.categoria) {

      db.products.findAndCountAll({
        offset: Number(req.query.page)*12 || 0,
        limit: 12, 
        where: {
          category : req.query.categoria
        }
      }).then(function (products) {
        res.render('index/indexFiltrados', {
          products: products.rows,
          pagination: {
            firstUrl: '/',
            nextUrl : '/?page=' + (page ? Number(page)+ 1 : 1),
            prevUrl :  '/?page=' + (page ? Number(page) - 1 : 0),
            lastUrl : '/?page=' + (parseInt(products.count / 12) - 1)
            },
          page,
          cat,
          usuario: req.session.usuario,
          prodEnCarrito : req.session.cantProdCarro,
          toThousand
        })
      })

    }


    db.products.findAndCountAll({
      offset: Number(req.query.page)*12 || 0,
      limit: 12, })
      .then(function (products) {

        let lastPage = Math.ceil(products.count / 12 -1)
            res.render('index', {
          products: products.rows,
          pagination: {
            firstUrl: '/',
            nextUrl : '/?page=' + (page ? Number(page) + 1 : 1),
            prevUrl :  '?page=' + (page ? Number(page) - 1 : 0),
            /* lastUrl : '?page=' + (parseInt(products.count / 12 - 1)) */
            lastUrl : '?page=' + Math.ceil(products.count / 12 - 1)
            },
            page,
            lastPage,
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
     res.send(resultado)
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