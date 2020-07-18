const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



let prodsVideoJuegos = products.filter(product => product.category == 'videoJuegos')
let prodsComics = products.filter(product => product.category == 'comics')
let prodsJuegosDeMesa = products.filter(product => product.category == 'juegosDeMesa')

controllerIndex = {

  home: function (req, res, next) {

    res.render('index', {
      products: products,usuario : req.session.usuario
    })
  },

  catA: function (req, res, next) {

    res.render('index/videoJuegos', {
      prodsVideoJuegos, usuario : req.session.usuario})
  },

  catB: function (req, res, next) {
    res.render('index/comics', {
      prodsComics, usuario : req.session.usuario
    })
  },

  catC: function (req, res, next) {
    res.render('index/juegosDeMesa', {
      prodsJuegosDeMesa , usuario : req.session.usuario
    })
  },

  cart: function (req, res, next) {
    res.render('index/cart' , {usuario : req.session.usuario})
  }

}


module.exports = controllerIndex