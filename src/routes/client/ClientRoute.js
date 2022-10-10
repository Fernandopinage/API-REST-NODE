module.exports = function(app) {
 
    const service = app.controllers.clienteController;
    const secret = app.middlewares.authenticate;
     
    app.post('/cliente/login',
         service.index(app));   

    app.get('/cliente',
        service.list(app));

    app.post('/cliente',
        secret.auth(app),
        service.create(app));

};