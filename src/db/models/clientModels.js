const Sequelize = require('sequelize');
const database = require('../config/database');

const Client = database.define('client', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telephone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    agency: {
        type: Sequelize.STRING(6),
        allowNull: true
    },
    account: {
        type: Sequelize.STRING(4),
        allowNull: true
    },
});

module.exports = Client;