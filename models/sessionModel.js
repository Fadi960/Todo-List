const { models } = require("./index");

module.exports = {
    createSession : async(body) => {
        try{
            console.log(body);
            const session = await models.sessions.create({...body});
            return{
                response: session,
            };
        }catch(error){
            console.log("error in model", error);
            return{
                error: error,
            };
        }
    },
};