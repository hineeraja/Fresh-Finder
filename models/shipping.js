const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shipping extends Model { }

Shipping.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },

        full_name: {
            type: DataTypes.STRING(150),
            allowNull: false,

        },

        address: {
            type: DataTypes.STRING(150),
            allowNull: false,

        },

        city: {
            type: DataTypes.STRING(150),
            allowNull: false,

        },

        country: {
            type: DataTypes.STRING(150),
            allowNull: false,

        },

        postalcode: {
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

Shipping.belongsTo(User);

module.exports = Category;