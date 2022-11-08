module.exports = function(sequelize, dataTypes) {
    const alias = 'Subcategory';
    const cols = {
        id: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category_id: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        }
    }
    const config = {
        tableName: 'subcategories',
        timestamps: true
    }

    const Subcategory = sequelize.define(alias,cols,config);

    Subcategory.associate = function (models) {
        Subcategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "product_id"
        })
        Subcategory.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "category_id"
        })
    }


    return Subcategory;
}

