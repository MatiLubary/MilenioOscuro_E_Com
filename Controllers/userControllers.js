let fs = require ('fs');

userControllers = {
    
    login : function(req, res, next) {
        
        
        res.render('login')
    },
    register : function(req, res, next) {
        
        
        res.render('register')
    },
    create : function(req, res, next) {
        let user = {
            name: req.body.name,
            email:req.body.email,
            password: req.body.password
        }
        let archivoUser = fs.readFileSync('users.json' , {encoding:'utf-8'});
        let users;
        if (archivoUser == ""){
             users = [];
        }else {
            users = JSON.parse(archivoUser);
        }

        users.push(user);
        usersJson = JSON.stringify(users);
        fs.writeFileSync('users.json' , usersJson); 
        res.redirect('/')
    }
}
module.exports = userControllers;