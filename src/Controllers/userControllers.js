let fs = require('fs');

userControllers = {

    login: function (req, res, next) {


        res.render('users/login' , {usuario : req.session.usuario})
    },


    register: function (req, res, next) {


        res.render('users/register' ,{usuario : req.session.usuario})
    },
    create: function (req, res, next) {
        let user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        let archivoUser = fs.readFileSync('src/data/users.json', {
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
        res.redirect('/')
    }
}
module.exports = userControllers;