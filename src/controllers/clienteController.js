module.exports.list = (app) => 

  async function (req, res) {
    
    const Client = app.business.clienteBusiness;
    const data = await Client.list(req,app);
 

};

module.exports.create = (app) => 

  async function (req, res) {

    const Client = app.business.clienteBusiness;

    const data = await Client.create(req,app);
    console(data)

};
