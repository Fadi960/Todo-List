const { models } = require("./index");

module.exports = {
    findByUserName : async(userName) => {
        try{
            const user = await models.users.findOne({where:{ userName: userName}});
            return{
                response: user,
            }
        }catch(error){
          console.log("error from model",error);
            return{
                error: error,
            };
        }
    },

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
    getUser : async(body) => {
        try{
            const user = await models.users.findOne({...body});
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

    deleteUser: async (userId) => {
        try{
            const deleteUser = await models.users.destroy({ 
                where: {
                    userId: userId,
                },
            });

            return {
                response: deleteUser,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
    updateUser: async ({ userId, ...body }) => {
        try {
            console.log(userId,body);
            const updateUser = await models.users.update({ ...body},{
                where: {
                    userId: userId,
            },
            })
            return {
                response: updateUser,
            };
        } catch (error) {
            console.log("error from model",error);
            return {
                error: error,
            };
        }
    },
};