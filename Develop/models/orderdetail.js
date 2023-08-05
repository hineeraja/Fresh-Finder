const { Model, DataTypes } = require('sequelize');
const sequelize = require('..config/connection');

class Orderdetail extends Model { }

Orderdetail.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },

        quantity:{ 
            type: DataTypes.DATE,
            allowNull: true

        },

        quantity:{
            type: DataTypes.DATE,
            allowNull: false,

        }

    },

    {
        sequelize,
        freezeTableName: true,
        modelName: 'collection',

    }
);

module.exports = Collection;