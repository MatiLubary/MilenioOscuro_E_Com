const fs = require('fs');




creditCardControllers = {



    credit: function (req, res, ) {


        res.render('creditCard/payment')
    },


    resumen: function (req, res, ) {

        res.render('creditCard/paymentReceipt')
    }


}


module.exports = creditCardControllers;