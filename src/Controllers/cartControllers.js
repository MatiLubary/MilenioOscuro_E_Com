const db = require('../../db/models')
const { response } = require('express')
var numero = []
var precioTotal = []
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

var precioFinal 

var noEliminados = []


let cartControllers = {

   /*  home : function(req, res){



      

        db.products.findAll()
        .then(function(result){
            var carritoActual = result.filter(function(product){
                      if ( numero.includes(product.id)){
                          return product
                      }
              
            })

            let totalCarro = carritoActual.reduce(function (acum, precio) {
                return acum + precio.price
              }, 0)

req.session.carroAPagar = carritoActual


            

              res.render('index/cart', {
                productos: carritoActual,
                usuario: req.session.usuario,
                totalCarrito: totalCarro
              })

        })




        
    },

    

     store : function(req ,res){


        numero.push(parseInt(req.body.idProducto))
       

        if( req.session.usuario != undefined){
            res.send("hay usuario")
        } else {
            
            res.send("no hay usuario")
        }

   
        
    },

    pay : function(req, res){
       
        if( req.session.usuario != undefined){
            
            db.users.findOne({
                where : {
                    email : req.session.usuario.email
                }
            })
            .then(function(usuario){
               db.carts.findAll({
                   where : {
                       users_id : usuario.id
                   }
               })
               .then(function(carrito){
                   
                   if(carrito == ""){
                    db.carts.create({
                        users_id: usuario.id,
                        total: 0
                    })

                 /*    db.carts.findByPk(usuario.id)
                    .then(function(carro){

                    }) */

                /*   console.log(req.session.carroAPagar)

                    


                   } else {
                    
                    db.carts.findOne({
                        where : {
                            users_id: usuario.id
                        }
                    })
                    .then(function(carro){
                        for (let num of numero){
                            db.products.findByPk(num)
                            .then(function(product){
                                carro.addProducts(product)
                            })
                        }
                        
                    })
                      
                    
                    
                    res.send("tiene carrito")
                   }
               })
            })




        } else {
            
            res.send("no hay usuario")
        }
    },

    delete : function(req, res){

        if( req.session.usuario != undefined){

            db.users.findOne({
                where : {
                    email : req.session.usuario.email
                }
            }) 
            .then(function(usuario){

            db.carts.findOne({
                where : {
                    users_id: usuario.id
                }
            })
            .then(function(carro){
                carro.removeProducts(req.params.id)
                res.redirect("/")
            })
        })

        let losQueQuedan =   numero.filter(function(borrado){
            return borrado != req.params.id
        })

        numero = losQueQuedan

        } else {

      

        
      let losQueQuedan =   numero.filter(function(borrado){
            return borrado != req.params.id
        })

        numero = losQueQuedan
    
        res.send(numero)
       }
    } */

 home : function(req ,res){

    


      var totalCarro = noEliminados.reduce(function (acum, precio) {
        return acum + precio.price
      }, 0)

precioFinal = totalCarro



res.render('index/cart', {
    productos: noEliminados,
    usuario: req.session.usuario,
    totalCarrito: totalCarro,
    toThousand
  })


    /*  res.send("soy home") */
 },


 store : function(req, res) { 

   db.products.findAll({
       where : {
           id : parseInt(req.body.idProducto)
       }
   })
   .then(function(producto){
       for (let prod of producto){
      var precioVerdadero =   prod.price * req.body.qty
      var precioOriginal = prod.price
       }
    producto.forEach(function(cucu){
        cucu.price = precioVerdadero
        cucu.cantidad = req.body.qty
        cucu.priceOriginal = precioOriginal
    })

    console.log(producto)


    producto.forEach(function(prod){
        noEliminados.push(prod)
    })
    
       numero.push(producto)
       
       
       res.redirect("/cart")
   })
  
 },


 pay : function(req ,res){

    if( req.session.usuario != undefined){
            
        db.users.findOne({
            where : {
                email : req.session.usuario.email
            }
        })
        .then(function(usuario){
           db.carts.findAll({
               where : {
                   users_id : usuario.id
               }
           })
           .then(function(carrito){
               
               if(carrito == ""){
                db.carts.create({
                    users_id: usuario.id,
                    total: precioFinal
                })
                db.carts.findOne({
                    where : {
                        users_id: usuario.id
                    }
                })
                .then(function(carro){
                    for (let num of noEliminados){
                        db.products.findByPk(num.id)
                        .then(function(product){
                            carro.addProducts(product)
                        })
                    }
                    res.redirect("/cart/payment")
                })


            } else {
                    
                db.carts.findOne({
                    where : {
                        users_id: usuario.id
                    }
                })
                .then(function(carro){
                    for (let num of noEliminados){
                        console.log(num)
                        db.products.findByPk(num.id)                                              
                        .then(function(product){
                            if(product.id == num.id){
                                var laCantidad = num.cantidad
                            }
                        carro.addProducts(product, {through : {
                                price: product.price,
                                qty : laCantidad
                            }})
                        })
                    }
                    res.render('index/pagoExitoso')
                })
            }


        })
    })
   
  } else {
      res.redirect("/users/login")
  }
},



 delete : function(req, res){

    if( req.session.usuario != undefined){

        db.users.findOne({
            where : {
                email : req.session.usuario.email
            }
        }) 
        .then(function(usuario){

        db.carts.findOne({
            where : {
                users_id: usuario.id
            }
        })
        .then(function(carro){
            carro.removeProducts(req.params.id)
            res.redirect("/")
        })
    })

   

   let alFin = noEliminados.filter(function(prod){
        return prod.id != req.params.id
    })

    noEliminados = alFin

    
     res.redirect("/")

} else {
    let alFin = noEliminados.filter(function(prod){
        return prod.id != req.params.id
    })

    noEliminados = alFin

    
     res.redirect("/")
}

 },


 successfull : function(req, res){
   
    db.users.findOne({
        where : {
            email : req.session.usuario.email
        }
    }) 
    .then(function(usuario){
       
        db.carts.destroy({
            where : {
                users_id : usuario.id
            }
        })

        noEliminados = []

        res.redirect('/')
    })

     
 }

























}



module.exports = cartControllers