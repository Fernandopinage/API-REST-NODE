
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
        const data = req.body;
        try {
            const result = await Client.create(data);
            return { status: true, mensage: 'cadastrado com sucesso', result: result };

        } catch (error) {
            return error;
        }
    }
};