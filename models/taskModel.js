const { models } = require("./index");

module.exports = {
    createTask : async(body) => {
        try{
            console.log(body);
            const tasks = await models.tasks.create({...body});
            return{
                response: tasks,
            }
        }catch(error){
            return{
                error: error,
            };
        }
    },
    getAllTasks : async()=>{
        try{
            const tasks = await models.tasks.findAll({
                attributes: {
                    exclude: ["deletedAt","userId"],
                },
                include: [
                    {
                        model: models.users,
                        attributes: ["userId","userName"],
                    },
                ],
            });
            return{
                response: tasks,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },

};