module.exports = function(sequelize , dataTypes){
   
   let alias = "carts"

   let cols = {
       id : {
           type : dataTypes.INTEGER,
           primaryKey : true,
           autoIncrement : true
       },

       total : {
           type : dataTypes.INTEGER
       }
   }
   
   config = {
       tableName : "carts",
       timestamps : true,
       createdAt : "created_at",
       updatedAt : "updated_at",
       deletedAt : "deleted_at",
       paranoid : true
   }
   
   
   
   
   
   
   
   
    let cart = sequelize.define(alias, cols , config)

    cart.associate = function(models){
        cart.belongsTo(models.users , {
            as : "users",
            foreignKey : "users_id"
        })
   
     cart.belongsToMany(models.products , {
         as : "products",
         through: models.cartsProducts,
         foreignKey : "cart_id",
         otherKey : "product_id",
         timestamps: true

     })
   
   
   
    }

return cart
}

