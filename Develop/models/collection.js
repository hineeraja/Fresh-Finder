const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Collection extends Model { }

Collection.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },

        collection_name: {
            type: DataTypes.STRING(150),
            allowNull: false,

        },

        collection_image: {
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



module.exports = Collection;