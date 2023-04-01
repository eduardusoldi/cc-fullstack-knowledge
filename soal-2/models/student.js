'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helpers/bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasMany(models.StudentCourse)
    }
  }
  Student.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please insert student's name`
        },
        notEmpty: {
          msg: `Please insert student's name`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: `Student's email must be unique`
      },
      validate: {
        notNull: {
          msg: `Please insert student's e-mail`
        },
        notEmpty: {
          msg: `Please insert student's e-mail`
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
          msg: `Please insert student's password`
        },
        notEmpty: {
          msg: `Please insert student's password`
        },
        len: {
          args: [5,100],
          msg: `Minimal length for student's password is 5 character`
        }
      }
    },
    NIM: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please insert student's NIM`
        },
        notEmpty: {
          msg: `Please insert student's NIM`
        }
      }
    },
    major: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Please insert student's major`
        },
        notEmpty: {
          msg: `Please insert student's major`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Student',
  });

  Student.beforeCreate(student => {
    student.password = hash(student.password)
    return student.password
  })
  
  return Student;
};