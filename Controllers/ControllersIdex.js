controllerIndex = {

    home : function(req, res, next) {
        res.render('index')
      },

      catA : function(req, res, next) {
        res.render('videoJuegos')
      },

      catB : function(req, res, next) {
        res.render('comics')
      },

      catC : function(req, res, next) {
        res.render('juegosDeMesa')
      },

    cart : function(req, res, next) {
        res.render('cart')
      }

}


module.exports = controllerIndex