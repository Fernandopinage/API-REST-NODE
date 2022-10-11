var jwt = require('jsonwebtoken');
module.exports.verifyAuthentication = (app)=>

    async function(req,res,next){
        const token = req.headers["authorization"];
        try {
            var verifycation = await jwt.verify(token, process.env.SECRET_KEY);
            if(verifycation){
                next();
            }
        } catch(error) {
            return error;
        }
    }

