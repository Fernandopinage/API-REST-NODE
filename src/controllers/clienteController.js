module.exports.index = (app) =>
    async function (req,res){
        const Client = app.business.clienteBusiness; 
        const { status, result, token } = await Client.index(req,app);
        
        if(status){
            return res.status(200).send(token);
        }
    };

module.exports.list = (app) => 
    async function (req, res) {
    
        const Client = app.business.clienteBusiness;
        const { status, result }  = await Client.list(req,app);

        if(status){
            return res.status(200).send(result);
        }
        return res.status(200).send(result);
  

    };

module.exports.create = (app) => 
    async function (req, res) {

        const Client = app.business.clienteBusiness;
        const { status, result, mensage } = await Client.create(req,app);
      
        if(status){
            return res.status(200).send(result);
        }else{
            return res.status(400).send(mensage);
        }

    };
