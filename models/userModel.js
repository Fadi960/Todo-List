const { models } = require("./index");
const { createUser,getAllUsers } = require("../controller/userController");
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
    },

    getAllUsers : async()=>{
        try{
            const users = await models.users.findAll({
                attributes: {
                    exclude: ["password"],
                }
            });
            return{
                response: users,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
}