'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Library.belongsTo(models.Book, { foreignKey: 'bookId', as: 'book' });
      Library.belongsTo(models.Student, { foreignKey: 'studentId', as: 'student' });
    }
  }
  Library.init({
    studentId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    returndate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Library',
  });
  return Library;
};