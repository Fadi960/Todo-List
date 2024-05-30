const sessionService = require("../services/sessionService");
const joi = require("joi");

const createSessionSchema = joi.object().keys({
    userId: joi.string().length(36).required(),
});

module.exports ={
    createSession: async (req, res) => {
        try{
            const validate = await createSessionSchema.validateAsync(req.body);
            const session = await sessionService.createSession(validate);

            if(session.error){
                return res.send({
                    error: session.error,
                });
            }
            return res.send({
                response: session.response,
            });
        }catch(error){
            console.log("error in controller",error);
            return res.send({
                error: error,
            });
        }
    },
};