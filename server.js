require('dotenv').config();
const express = require('express');
const  app = express();
const bodyParser = require('body-parser');
const consign = require('consign');
const Port = process.env.PORT || '3000';


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

consign({
    verbose: false,
    cwd: 'src'
  }
)
  .include('routes')
  .then('business')
  .then('controllers')
  .then('config/services.js')
  .into(app);

app.listen(Port,()=>{
    console.log('http://localhost:3000/')
});

module.exports = app;