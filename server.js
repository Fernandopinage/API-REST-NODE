require('dotenv').config();
const express = require('express');
const consign = require('consign');
var cors = require('cors')
const bodyParser = require('body-parser');
const  app = express();
const Port = process.env.PORT || '3000';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

consign({cwd: 'src'})
    .then('business')
    .then('controllers')
    // .then('db/')
    .then('./middlewares')
    .then('routes')
    .then('./services.js')
    .into(app);
  
app.listen(Port,()=>{
    console.log('http://localhost:3000/');
});

module.exports = app;