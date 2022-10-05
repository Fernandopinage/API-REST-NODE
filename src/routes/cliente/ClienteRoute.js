const cliente = require('../../controllers/clienteController')
module.exports = app =>{
    
  const service = app.services;
    console.log(app)

    app.get('/list/cliente',
    cliente.list(app))
}