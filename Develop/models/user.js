const { Model, DataTypes } = require('sequelize');
const sequelize = require('..config/connection');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        first_name: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },

        last_name: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },

    },

    {
        sequelize,
        freezeTableName: true,
        modelName: 'user',

    }
);



module.exports = User;