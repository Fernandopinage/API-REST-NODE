module.exports.list = (app) => 

  async function (req, res) {

    console.log('aqui')

};

module.exports.create = (app) => 

  async function (req, res) {

    const Client = app.business.clienteBusiness;

    const data = await Client.create(req);

};
