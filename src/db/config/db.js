const Sequelize = require("sequelize")
require('dotenv').config();

const sequelize = new Sequelize(process.env.BD_NAME,process.env.BD_USER, process.env.BD_PWD, {
    host: process.env.BD_HOST,
    dialect: process.env.BD_DIALECT,
    logging: false
})
module.exports = sequelize;