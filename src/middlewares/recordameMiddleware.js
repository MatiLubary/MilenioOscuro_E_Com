const users = require("../data/users.json")

module.exports = function  (req, res, next) {


    if (req.cookies.recordame != undefined && req.session.user == undefined) {

        let user = users.find(user => {
            return user.email == req.cookies.recordame
        })
        if (user) {
    
            req.session.user = user
            
            }
            
    }
    next()
}