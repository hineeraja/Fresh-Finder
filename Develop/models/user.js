
const { DataTypes } = require("sequelize");
const db = require("../config/connection"); //Replace with real data base.

const User = db.define("User", {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Username: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  Email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  Password: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  Address: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  FirstName: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  City: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Province: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  EmailVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  CreatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = User;

