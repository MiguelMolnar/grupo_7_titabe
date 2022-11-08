module.exports = function(sequelize, dataTypes) {
    const alias = 'Cart_status';
    const cols = {
        id: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        }
    }
    const config = {
        tableName: 'cart_status',
        timestamps: true
    }

    const Cart_status = sequelize.define(alias,cols,config);

    Cart_status.associate = function (models) {
        Cart_status.hasMany(models.Cart, {
            as: "cart",
            foreignKey: "cart_id"
        })
    }

    return Cart_status;
}