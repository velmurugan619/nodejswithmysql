const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    database: 'agriorganic',
    username: 'root',
    password: null,
    dialect: 'mysql'
  });
  
  module.exports = sequelize;