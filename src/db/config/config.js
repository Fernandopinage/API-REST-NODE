require('dotenv').config();
module.exports = 
{
    "development": {
        "username": process.env.BD_USER,
        "password": process.env.BD_PWD,
        "database": process.env.BD_NAME,
        "host": process.env.BD_HOST,
        "port": process.env.BD_PORT,
        "dialect": process.env.BD_DIALECT,
        "logging": false
    },
    "test": {
        "username": process.env.BD_USER,
        "password": process.env.BD_PWD,
        "database": process.env.BD_NAME,
        "host": process.env.BD_HOST,
        "port": process.env.BD_PORT,
        "dialect": process.env.BD_DIALECT,
        "logging": false
    },
    "production": {
        "username": process.env.BD_USER,
        "password": process.env.BD_PWD,
        "database": process.env.BD_NAME,
        "host": process.env.BD_HOST,
        "port": process.env.BD_PORT,
        "dialect": process.env.BD_DIALECT,
        "logging": false
    }
};