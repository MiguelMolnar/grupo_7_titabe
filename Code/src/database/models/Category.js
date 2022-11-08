module.exports = function(sequelize, dataTypes) {
    const alias = 'Category';
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
        tableName: 'categories',
        timestamps: true
    }

    const Category = sequelize.define(alias,cols,config);

    Category.associate = function (models) {
        Category.hasMany(models.Subcategory, {
            as: "subcategies",
            foreignKey: "subcategory_id"
        })
    }



    return Category;
}

