const Sequelize = require('sequelize');
const database = require('../config/database');

const Cliente = database.define('client', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      telephone:{
        type: Sequelize.STRING(14),
        allowNull: true
      },
      agency:{
        type: Sequelize.STRING(6),
        allowNull: true
      },
      account:{
        type: Sequelize.STRING(4),
        allowNull: true
      },
});

module.exports = Cliente;