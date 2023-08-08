const { Model, DataTypes } = require('sequelize');
const sequelize = require('..config/connection');

class Subcategory extends Model { }

Subcategory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },

        subcategory_name: {
            type: DataTypes.STRING(150),
            allowNull: false,

        },

        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },

    },


    {
        sequelize,
        freezeTableName: true,
        modelName: 'subcategory',

    }
);


module.exports = Subcategory;