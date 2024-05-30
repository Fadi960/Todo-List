const taskService = require("../services/taskService");
const joi = require("joi");

const createTaskSchema = joi.object().keys({
    userId: joi.string().length(36).required(),
    title: joi.string().min(3).max(255).required(),
    description: joi.string().min(3).max(1000).required(),
});

module.exports ={
    createTask: async (req, res) => {
        try{
            const validate = await createTaskSchema.validateAsync(req.body);
            const tasks = await taskService.createTask(validate);

            if(tasks.error){
                return res.send({
                    error: tasks.error,
                });
            }
            return res.send({
                response: tasks.response,
            });
        }catch(error){
            return res.send({
                error: error,
            });
        }
    },

    getAllTasks: async(req,res)=>{
        try{
            const tasks = await taskService.getAllTasks();
            if(tasks.error){
                return res.send({
                    error: tasks.error,
                });
        }
        return res.send({
            response: tasks.response,
        });
    }catch (error) {
        return res.send({
        error: error,
        });
    }
},
};