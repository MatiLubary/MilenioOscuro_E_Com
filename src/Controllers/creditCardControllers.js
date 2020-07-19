const fs = require('fs');




creditCardControllers = {



    credit: function (req, res, ) {


        res.render('creditCard/payment' , {usuario : req.session.usuario})
    },


    resumen: function (req, res, ) {

        res.render('creditCard/paymentReceipt' , {usuario : req.session.usuario})
    }


}


module.exports = creditCardControllers;