const fs = require('fs');




creditCardControllers = {

   
   
    credit : function (req,res,){
        
        
        res.render('payment')
   },


    resumen : function (req,res,){

           res.render('paymentReceipt')
    }


}


module.exports = creditCardControllers;