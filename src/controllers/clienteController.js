module.exports.list = (app) => 

  async function (req, res) {
    
    const Client = app.business.clienteBusiness;
    const data = await Client.list(req,app);
    console.log(data)

};

module.exports.create = (app) => 

  async function (req, res) {

    const Client = app.business.clienteBusiness;

    const data = await Client.create(req,app);
    console(data)

};
