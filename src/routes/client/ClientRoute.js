module.exports = function(app) {
 
    const service = app.controllers.clienteController;

    app.get('/cliente',
        service.list(app));

    app.post('/cliente',
        service.create(app));



        
    
};