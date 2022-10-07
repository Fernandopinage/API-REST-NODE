require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.BD_USER,
    "password": process.env.BD_PWD,
    "database": process.env.BD_NAME,
    "host": process.env.BD_HOST,
    "dialect": process.env.BD_DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
