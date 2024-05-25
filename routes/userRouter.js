const route = require("express").Router();

const{ createUser, getAllUsers}= require("../controller/userController");

route.post("/createUser", createUser);
route.get("/getAllUsers", getAllUsers);

module.exports = route;