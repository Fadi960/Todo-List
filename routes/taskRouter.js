const route = require("express").Router();

const { getAllTasks, createTask } = require("../controller/taskController");

route.post("/createTask", createTask);
route.get("/getAll", getAllTasks);

module.exports = route;