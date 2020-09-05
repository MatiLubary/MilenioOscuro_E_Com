module.exports = function(sequelize , dataTypes){



    let alias = "cartsProducts"

    let cols = {

        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },

        qty : {
            type : dataTypes.INTEGER
        },

        price : {
            type : dataTypes.INTEGER
        } ,
        offer : {
            type : dataTypes.STRING
        }
    }


    let config = {
        tableName : "carts_products",
        timestamps : true,
        underscor : true,
        createdAt : "created_at",
        updatedAt : "updated_at",
        deletedAt : "deleted_at",
        paranoid : true
    }



  let cartProduct = sequelize.define(alias , cols , config)


  cartProduct.associate = function(models){
      cartProduct.belongsTo(models.carts , {
          as : "carts",
          foreignKey : "cart_id"
      })

cartProduct.belongsTo(models.products , {
    as : "products",
    foreignKey : "product_id"
})

  }

  return cartProduct


}