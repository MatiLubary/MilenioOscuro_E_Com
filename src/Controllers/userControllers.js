let fs = require('fs');
let {check, validationResult, body} = require ('express-validator');
const { log } = require('console');
const archivoUsuario = require('../data/users.json')
const db = require('../../db/models')
const bcrypt = require('bcrypt');

userControllers = {
    
    login: function (req, res, next) {

        
        db.cartsProducts.findAll({
            include : [{ association : "products"}]
          })
          .then(function(productoCarrito){
        
            let carritoActual = productoCarrito.filter(function(productos){
                return productos.cart_id == 1
              })
        
          /*   for(let usi of carritoActual){
               console.log(usi.products.length) 


                
            } */
            console.log(carritoActual.length)
        
          
           
            
          })
        


            res.render('users/login' , {usuario : req.session.usuario})
        


       
    },
    
    processLogin: function (req, res, next) {


 /* let usuarioEncontrado =  archivoUsuario.find(function(usuario){
      if (usuario.email == req.body.email && bcrypt.compareSync(req.body.password , usuario.password)){
          return usuario
      }
  })
 */
  

  db.users.findOne({
      where : {
          email : req.body.email,
          password : req.body.password
      }
  })
.then(function(usuario ){
    if( usuario){
        req.session.usuario = usuario
  
        if (req.body.recordame != undefined){
  
          res.cookie('recordame',  { maxAge: 0 })
  
      }
  
        res.redirect("/")
    } else {
   res.render ('users/login', {errors:[{msg:'invalid credentials'}], usuario : req.session.usuario }
                  );   
    }
    
    db.carts.findOne({
        where : {
            users_id : usuario.id
        }
    })
    .then(function(resultado){
        if(resultado){
            res.redirect("/")
        }else {
            db.carts.create({
                users_id : usuario.id,
                total : 0
            })
             
        }  
       /*  db.users.findAll({
            include : [{association : "carts"}]
        })
        .then(function(carrito){

           let elIndicado =  carrito.find(function(usuario){
                if(usuario.email == req.session.usuario.email){
                    return usuario
                }
            })
       
            for(let usuario of elIndicado.carts){
                var idCarrito = usuario.id
            }


           req.session.carrito = idCarrito
   

}) */

})



  /* if( usuario){
      req.session.usuario = usuarioEncontrado

      if (req.body.recordame != undefined){

        res.cookie('recordame',  { maxAge: 0 })

    }

      res.redirect("/")
  } else {
 res.render ('users/login', {errors:[{msg:'invalid credentials'}], usuario : req.session.usuario }
                );   
  } */

})
  
},


       /*  let errors = (validationResult(req));
        
        if (errors.isEmpty()){ */
           /*  let archivoUser = fs.readFileSync('src/data/users.json', {
                encoding: 'utf-8'
            });
            let users;
            if (archivoUser == "") {
                users = [];
            } else {
                users = JSON.parse(archivoUser);
            }
        })
        
        
        if( usuarioEncontrado){
            req.session.usuario = usuarioEncontrado
            
            if (req.body.recordame != undefined){
                
                res.cookie('recordame',  { maxAge: 0 })
                
            }
            
            res.redirect("/")
        } else {
            res.render ('users/login', {errors:[{msg:'invalid credentials'}], usuario : req.session.usuario }
            );   
        }
        
        
        
    },
    
    
    /*  let errors = (validationResult(req));
    
    if (errors.isEmpty()){ */
        /*  let archivoUser = fs.readFileSync('src/data/users.json', {
            encoding: 'utf-8'
        });
        let users;
        if (archivoUser == "") {
            users = [];
        } else {
            users = JSON.parse(archivoUser);
        }
        for (let i=0; i < users.length; i++) {
            if (users[i].email == req.body.email) {
                if (req.body.password == users[i].password) {
                    let userToLog = users[i];
                    break;
                    
                }
            }
        }
        if (userToLog == undefined){
            return res.render ('users/login', {errors:[{msg:'invalid credentials'}
        ]});   
    }
    
    /*  req.session.userLoged = userToLog; */
    /*   res.redirect('users/profile');
    
} else {
    return res.render ('users/login', {errors:errors.errors})
} */


    register: function (req, res, next) {
    
    
       res.render('users/register' ,{usuario : req.session.usuario})
    },

    create: function (req, res, next) {
        let password = bcrypt.hashSync(req.body.password, 10);
        let errors = (validationResult(req));

        if (errors.isEmpty()){
            let user = {
                name: req.body.name,
                email: req.body.email,
                password : req.body.password,
                avatar : req.body.avatars

            }
            /* console.log(req.body) */

       db.users.create({
           username: req.body.name,
           email: req.body.email,
           password : req.body.password,
           avatar : req.body.avatars
       })
       res.redirect('/')

           /*  let archivoUser = fs.readFileSync('src/data/users.json', {
                encoding: 'utf-8'
            });
            let users;
            if (archivoUser == "") {
                users = [];
            } else {
                users = JSON.parse(archivoUser);
            }

            users.push(user);
            usersJson = JSON.stringify(users);
            fs.writeFileSync('src/data/users.json', usersJson);
            
            res.redirect('/') */
        } 
        else {
            return res.render ('users/register', {errors:errors.errors , usuario : req.session.usuario})
        }    
    },                
        
    profile: function (req, res, next) {
      
         
        res.render('users/profile', {usuario : req.session.usuario})
    },
        
    cerrarSesion : function (req, res,){
            
            req.session.usuario = undefined
            
            req.cookies.recordame = undefined
            
            res.redirect("/")
    }
        
        
        
        
        
        
}        
      
        
module.exports = userControllers;
    
