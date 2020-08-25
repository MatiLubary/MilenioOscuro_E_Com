let fs = require('fs');
let {
    check,
    validationResult,
    body
} = require('express-validator');
const {
    log
} = require('console');

const db = require('../../db/models')
const bcrypt = require('bcrypt');

userControllers = {

    login: function (req, res, next) {





        res.render('users/login', {
            usuario: req.session.usuario
        })




    },

    processLogin: function (req, res, next) {


        /* let usuarioEncontrado =  archivoUsuario.find(function(usuario){
             if (usuario.email == req.body.email && bcrypt.compareSync(req.body.password , usuario.password)){
                 return usuario
             }
         })
        */


        db.users.findOne({
                where: {
                    email: req.body.email,
                   
                }
            })
            .then(function (usuario) {
        

           
                if (usuario) {
                    let contrasenia =    bcrypt.compareSync( req.body.password , usuario.password )
                    if(contrasenia){
                        console.log(contrasenia)
                    req.session.usuario = usuario

                    if (req.body.recordame != undefined) {

                        res.cookie('recordame', {
                            maxAge: 60000
                        })

                    }

                    res.redirect("/")
                
            } 
            else {
                    res.render('users/login', {
                        errors: [{
                            msg: 'invalid credentials'
                        }],
                        usuario: req.session.usuario
                    });
                }
            }

               /*  db.carts.findOne({
                        where: {
                            users_id: usuario.id
                        }
                    })
                    .then(function (resultado) {
                        if (resultado) {
                            res.redirect("/")
                        } else {
                            db.carts.create({
                                users_id: usuario.id,
                                total: 0
                            })

                        }


                    })
 */



            })

    },



    register: function (req, res, next) {


        res.render('users/register', {
            usuario: req.session.usuario
        })
    },

    create: function (req, res, next) {
        let password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        let errors = (validationResult(req));
        

        db.users.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(function (estaRegistrado) {



                if (estaRegistrado) {
                    res.redirect("/users/register")
               
                } else {



                    if (errors.isEmpty()) {


                        db.users.create({
                            username: req.body.name,
                            email: req.body.email,
                            password: password,
                            avatar: req.body.avatars
                        })
                        res.redirect('/')


                    } else {
                        return res.render('users/register', {
                            errors: errors.errors,
                            usuario: req.session.usuario
                        })
                    }
                }

            })

    },

    profile: function (req, res, next) {


        res.render('users/profile', {
            usuario: req.session.usuario
        })
    },

    cerrarSesion: function (req, res, ) {

        req.session.usuario = undefined

        req.cookies.recordame = undefined

        res.redirect("/")
    }






}


module.exports = userControllers;