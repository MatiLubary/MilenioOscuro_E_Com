module.exports = function(req, res, next){

/* console.log(req.session) */

if(req.session.usuario){



if(req.session.usuario.email == "administrador@hotmail.com"){


    next ()
} else{
    res.redirect("/")
}



}else{

    res.redirect("/")
    
}



}