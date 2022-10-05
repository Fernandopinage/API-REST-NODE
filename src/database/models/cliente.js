const Sequelize = require('sequelize');
const database = require('../config/database');

const Cliente = database.define('cliente', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone:{
        type: Sequelize.STRING(14),
        allowNull: true
      },
});

module.exports = Cliente;