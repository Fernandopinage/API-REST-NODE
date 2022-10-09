module.exports.list = (app) => 

    async function (req, res) {
    
        const Client = app.business.clienteBusiness;
        const result  = await Client.list(req,app);
        return res.status(200).send(result);
  

    };

module.exports.create = (app) => 

    async function (req, res) {
        const Client = app.business.clienteBusiness;

        const result = await Client.create(req,app);
        return res.status(200).send(result);

    };
