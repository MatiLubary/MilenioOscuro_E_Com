userControllers = {
    
    login : function(req, res, next) {
        
        
        res.render('login')
    },
    register : function(req, res, next) {
        
        
        res.render('register')
   
}
}
module.exports = userControllers;