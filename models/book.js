'use strict';
const {
  Model
} = require('sequelize');
const library = require('./library');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.hasMany(models.Library, { foreignKey: 'bookId', as: 'libraries' });
    }
  }
  Book.init({
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    publications: DataTypes.STRING,
    year: DataTypes.STRING,
    quantity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};