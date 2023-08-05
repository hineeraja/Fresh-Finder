const { Model, DataTypes } = require('sequelize');
const sequelize = require('..config/connection');

class Product extends Model { }

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING(150),
            allowNull: false,

        },

        image_url: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },

        metric: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },

        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

        organic: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        stock_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        reviews: {
            type: DataTypes.DECIMAL(2, 2),
            allowNull: false,
        },

        store_location: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },

    },
    
    {
        sequelize,
        freezeTableName: true,
        modelName: 'product',

    }
);

module.exports = Product;