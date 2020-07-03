constrollersProducts = {
 
 
 
 detail :    function (req , res){

        res.render('productsDetail')
        
        }, 

alta : function(req, res){ 

        res.render('productsAlta')
}
}

module.exports = constrollersProducts