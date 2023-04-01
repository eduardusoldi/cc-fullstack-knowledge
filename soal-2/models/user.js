'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helpers/bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please insert User's name`
        },
        notEmpty: {
          msg: `Please insert User's name`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: `User's email must be unique`
      },
      validate: {
        notNull: {
          msg: `Please insert User's e-mail`
        },
        notEmpty: {
          msg: `Please insert User's e-mail`
        },
        isEmail: {
          msg: "Please insert e-mail format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please insert User's password`
        },
        notEmpty: {
          msg: `Please insert User's password`
        },
        len: {
          args: [5,100],
          msg: `Minimal length for User's password is 5 character`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  
  User.beforeCreate(user => {
    user.password = hash(user.password)
    return user.password
  })

  return User;
};