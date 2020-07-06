const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



let prodsVideoJuegos = products.filter (product => product.category == 'videoJuegos')
let prodsComics = products.filter (product => product.category == 'comics')
let prodsJuegosDeMesa = products.filter (product => product.category == 'juegosDeMesa')

controllerIndex = {

    home : function(req, res, next) {
      

        res.render('index', {products: products})
      },

      catA : function(req, res, next) {

        res.render('videoJuegos', {prodsVideoJuegos})
      },

      catB : function(req, res, next) {
        res.render('comics', {prodsComics})
      },

      catC : function(req, res, next) {
        res.render('juegosDeMesa', {prodsJuegosDeMesa})
      },

    cart : function(req, res, next) {
        res.render('cart')
      }

}


module.exports = controllerIndex