const cliente = require('../../controllers/clienteController')
module.exports = app =>{
    
    app.get('/list/cliente',
    cliente.list(app))
}