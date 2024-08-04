'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasMany(models.Library, { foreignKey: 'studentId', as: 'library', onDelete: 'CASCADE' });
    }
  }
  Student.init({
    name: DataTypes.STRING,
    class: DataTypes.STRING,
    photo: DataTypes.STRING,
    video: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};