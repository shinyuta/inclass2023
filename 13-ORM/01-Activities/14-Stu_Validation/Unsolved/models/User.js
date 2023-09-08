const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

// TODO: Add validations to the User model

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      // allownull false and only allows alphanumeric
      allowNull: false,
      type: DataTypes.STRING,
      validate : {
        isAlphanumeric: true,
      },
    },
    email: {
      // allownull false
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      // allownull false and longer than 8 characters shorter than 25 characters
      allowNull: false,
      type: DataTypes.STRING,
      validate : {
        len : [8],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
