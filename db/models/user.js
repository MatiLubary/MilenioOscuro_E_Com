module.exports = function(sequelize , dataTypes){


let alias = "users"

let cols = {

    id : {
        type : dataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    email : {
        type : dataTypes.STRING
    },

    password : {
        type : dataTypes.STRING
    },

    username : {

          type : dataTypes.STRING
    },

    avatar : {
        type : dataTypes.STRING
    }
}

let config = {

         tableName :  "users",
         timestamps : true,
         underscor : true,
         createdAt : "created_at",
         updatedAt : "updated_at",
         deletedAt : "deleted_at",
         paranoid : true 
}





    let user = sequelize.define(alias , cols , config)

    user.associate = function(models){
        user.hasMany(models.carts , {
            as : "carts",
            foreignKey : "users_id"
        })
    }

    return user
}