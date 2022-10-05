module.exports = {
    async create(req,res){
        try {
          return {status:true, mensage:'cadastrado com sucesso'}  
        } catch (error) {
            return error.mensage();
        }
    }
}