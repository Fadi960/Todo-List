const userService = require("../services/userService");
const joi = require("joi");

const createUserSchema = joi.object().keys({
    userName: joi.string().min(3).max(34).required(),
    password: joi.string().min(3).max(34).required(),
});
const deleteUserSchema = joi.object().keys({
    userId: joi.string().min(3).max(64),
});
const updateUserSchema = joi.object().keys({
    userName: joi.string().min(3).max(34).required(),
    userId: joi.string().length(36).required(),
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

deleteUser: async (req, res) => {
    try {
        const validate = await deleteUserSchema.validateAsync(req.query);
        const deleteUser = await userService.deleteUser(validate.userId);

        if (deleteUser.error) {
            return res.send({ error: deleteUser.error });
        }
        return res.send({ response: deleteUser.response });
    } catch (error) {
        return res.send({ error: error, });
    }
},
  updateUser: async (req,res) => {
    try{
        const validate = await updateUserSchema.validateAsync(req.body);
        const updateUser = await userService.updateUser(validate);
        if (updateUser.error) {
            return res.send({ error: updateUser.error });
        }
        return res.send({ response: updateUser.response });
    } catch (error) {
        console.log("error from controller",error);
        return res.send({ error: error, });
    }
    }
  };
