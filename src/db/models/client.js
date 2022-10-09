const Sequelize = require('sequelize');
const database = require('../config/db');
const Client = database.define('clients', {
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
},{
    timestamps: false
});

module.exports = Client;