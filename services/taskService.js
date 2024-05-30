const taskModel = require("../models/taskModel");
const { v4: uuid } = require("uuid");

module.exports = {
    createTask: async (body) => {
        try {
            body.taskId = uuid();

            const tasks = await taskModel.createTask(body);

            if (tasks.error) {
                return {
                    error: tasks.error,
                };
            }
            return {
                response: tasks.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },


    getAllTasks: async () => {
        try {
            const tasks = await taskModel.getAllTasks();
            if (tasks.error) {
                return {
                    error: tasks.error,
                };
            }
            return {
                response: tasks.response,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
};