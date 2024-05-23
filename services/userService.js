const userModel = require("../models/userModel");
const {hash} = require("bcryptjs");
const {v4: uuid} = require("uuid");
const { createUser } = require("../controller/userController");
const {response} = require("../app");

module.exports = {
    createUser: async (body) =>{
        try{
            body.password = await hash (body.password, 10);
            body.userId = uuid();

            const user = await userModel.createUser(body);

            if(user.error){
                return{
                    error: user.error,
                };
            }
            delete user.response.dataValues.password;
            return{
                response: user.response,
            };
        }catch (error){
            return{
                error: error,
            };
        }
    },
};