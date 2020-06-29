controllerIndex = {

    home : function(req, res, next) {
        res.render('index')
      },

    cart : function(req, res, next) {
        res.render('cart')
      }

}


module.exports = controllerIndex