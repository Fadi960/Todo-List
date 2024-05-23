const { models } = require("./index");
const { createUser } = require("../controller/userController");
const { create } = require("./definitions/users");
const { response } = require("../app");

module.exports = {
    createUser : async(body) => {
        try{
            const user = await models.users.create({...body});
            return{
                response: user,
            }
        }catch(error){
            return{
                error: error,
            };
        }
    }
}