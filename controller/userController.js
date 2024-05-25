const userService = require("../services/userService");
const joi = require("joi");

const createUserSchema = joi.object().keys({
    userName: joi.string().min(3).max(34).required(),
    password: joi.string().min(3).max(34).required(),
});

module.exports ={
    createUser: async (req, res) => {
        try{
            const validate = await createUserSchema.validateAsync(req.body);
            const user = await userService.createUser(validate);

            if(user.error){
                return res.send({
                    error: user.error,
                });
            }
            return res.send({
                response: user.response,
            });
        }catch(error){
            return res.send({
                error: error,
            });
        }
    },

    getAllUsers: async(req,res)=>{
        try{
            const users = await userService.getAllUsers();
            if(users.error){
                return res.send({
                    error: users.error,
                });
        }
        return res.send({
            response: users.response,
        });
    }catch (error) {
        return res.send({
        error: error,
        });
    }
},
}