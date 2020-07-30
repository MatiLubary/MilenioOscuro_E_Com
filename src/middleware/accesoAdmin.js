module.exports = function(req, res, next){

/* console.log(req.session) */

if(req.session.usuario.email == "admin@hotmail.com"){

    next ()
} 

if(req.session.usuario.email == undefined){

    res.redicret("/")
}





}