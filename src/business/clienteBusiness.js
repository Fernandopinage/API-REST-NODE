const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
module.exports = {
    async index(req, app) {
        const Client = app.services.Client;

        try {

            const result = await Client.findOne({
                where: {
                    name: req.body.name
                },
                raw: true
            });


            if (await bcrypt.compare(req.body.password, result.password)) {
                const token = await jwt.sign({
                    data: {
                        "id": result.id,
                        "name": result.name,
                        "agency": result.agency,
                        "account": result.account,
                    }
                }, process.env.SECRET_KEY, { expiresIn: Number(process.env.EXPIRESIN) });

                return { status: true, result: result, token: token };
            }

        } catch (error) {
            return error;
        }
    },

    async list(req, app) {
        const Client = app.services.Client;

        try {

            const result = await Client.findAll();
            return { status: true, mensage: 'cadastrado com sucesso', result };

        } catch (error) {
            return error;
        }
    },

    async create(req, app) {
        const Client = app.services.Client;
        
        const keyClient = await this.__keyUnique(app);
        const data = {
            'name': req.body.name,
            'password': await bcrypt.hash(req.body.password, Number(process.env.SALTROUNDS)),
            'telephone': req.body.telephone,
            'agency': req.body.agency,
            'account': req.body.account,
            'key': keyClient
        };
        try {
            const result = await Client.create(data);
            return { status: true, mensage: 'cadastrado com sucesso', result: result };

        } catch (error) {
            return { status: false, mensage: 'Erro ao criar client'};
        }
    },

    async __keyUnique(app) {
        const Client = app.services.Client;
        const key = app.business.util.mathRandom;

        try {
            const result = await Client.findOne({
                where: {
                    key: key
                },
                raw: true
            });

            if (!result) return key;

        } catch (error) {
            return error
        }
    },
};