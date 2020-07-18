 function accesoUsuario(req , res , next){

if(req.session.usuario == undefined){

    res.redirect("/users/login")
} else {
    next()
}


}

module.exports = accesoUsuario