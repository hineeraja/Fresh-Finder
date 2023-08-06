const { Model, DataTypes } = require('sequelize');
const sequelize = require('..config/connection');

class Order extends Model { }

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'user', 
        key: 'id'
        },


        },

        paid_at:{
            type: DataTypes.DATE,
            allowNull: true,

        },

        cancel_at:{
            type: DataTypes.DATE,
            allowNull: false,
        },


        total_value: {
            type: DataTypes.STRING(150),
            allowNull: false,

        },

    },


    {
        sequelize,
        freezeTableName: true,
        modelName: 'collection',

    }
);



module.exports = Order;