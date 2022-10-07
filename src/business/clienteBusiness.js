const Client = require('../db/models/clientModels');
module.exports = {
    async create(req,app){
       
        const data  = await Client.create(req.body);
        console.log(req.body)
        // try {
        //   return {status:true, mensage:'cadastrado com sucesso'}  
        // } catch (error) {
        //     return error.mensage();
        // }
    }
}