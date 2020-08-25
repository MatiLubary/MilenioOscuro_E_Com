module.exports = function(sequelize, dataTypes){

let alias = "emails"

let cols = {
    id : {
        type : dataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    email : {
        type : dataTypes.STRING
    }
}


config = {
    tableName : "email_ofertas",
    timestamps : false
}

let emailOfertas = sequelize.define(alias, cols, config)

return emailOfertas
}