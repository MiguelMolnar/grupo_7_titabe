module.exports = function(sequelize, dataTypes) {
    const alias = 'Cart_item';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        cart_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    }
    const config = {
        tableName: 'cart_items',
        timestamps: true
    }

    const Cart_item = sequelize.define(alias,cols,config);

    Cart_item.associate = function(models) {
        Cart_item.belongsTo(models.Cart, {
            as: "cart",
            foreignKey: "cart_id"
        })
        Cart_item.belongsTo(models.Product, {
            as: "products",
            foreignKey: "product_id"
        })
    }

    return Cart_item;
}