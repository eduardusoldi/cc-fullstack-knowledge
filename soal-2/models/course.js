'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.hasMany(models.StudentCourse)
    }
  }
  Course.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please insert course's name`
        },
        notEmpty: {
          msg: `Please insert course's name`
        }
      }
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please insert course's code`
        },
        notEmpty: {
          msg: `Please insert course's code`
        }
      }
    },
    credit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please insert course's credit`
        },
        notEmpty: {
          msg: `Please insert course's credit`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};