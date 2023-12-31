const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model { }

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },

        category_name: {
            type: DataTypes.STRING(150),
            allowNull: false,

        },

    },

    {
        sequelize,
        freezeTableName: true,
        modelName: 'category',

    }
);

module.exports = Category;