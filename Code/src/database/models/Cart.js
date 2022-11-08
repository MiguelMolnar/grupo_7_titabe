module.exports = function(sequelize, dataTypes) {
    const alias = 'Cart';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: dataTypes.DATEONLY,
            allowNull: false, 
        },
        quantity: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        adress: {
            type: dataTypes.STRING(200),
            allowNull: true,
        },
        status_id: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        }
    }
    const config = {
        tableName: 'cart',
        timestamps: true
    }

    const Cart = sequelize.define(alias,cols,config);

    Cart.associate = function (models) {
    Cart.hasMany(models.Cart_item, {
        as: "cart_items",
        foreignKey: "cart_item_id"
    })
    Cart.belongsTo(models.Cart_status, {
        as: "cart_status",
        foreignKey: "cart_status_id"
    })
    Cart.belongsTo(models.User, {
        as: "users",
        foreignKey: "user_id"
    })
    }



    return Cart;
}
