const Client = require('../db/models/clientModels');
module.exports = {
    async list(req,app){

        console.log(Client)
        // try {
        // const data  = await Client.findAll();
        // console.log(data)
        // return {status:true, mensage:'cadastrado com sucesso',data:data}  

        // } catch (error) {
        //     return error;
        // }
    },

    async create(req,app){
       
        const data  = await Client.create(req.body);

        try {

          return {status:true, mensage:'cadastrado com sucesso'}  

        } catch (error) {
            return error;
        }
    }
};