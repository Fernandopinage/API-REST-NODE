const bcrypt = require('bcrypt');
module.exports = {
    async list(req, app) {
        const Client = app.services.Client;
        
        try {

            const data = await Client.findAll();
            return { status: true, mensage: 'cadastrado com sucesso', data: data };

        } catch (error) {
            return error;
        }
    },

    async create(req, app) {
        const Client = app.services.Client;
        const data = {
            'name': req.body.name,
            'password': await bcrypt.hash(req.body.password,Number(process.env.SALTROUNDS)),
            'telephone': req.body.telephone,
            'agency': req.body.agency,
            'account':req.body.account
        };
        try {
            const result = await Client.create(data);
            return { status: true, mensage: 'cadastrado com sucesso', result: result };

        } catch (error) {
            return error;
        }
    }
};