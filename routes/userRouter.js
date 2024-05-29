const route = require("express").Router();

const{ createUser, getAllUsers, deleteUser, updateUser}= require("../controller/userController");

route.post("/createUser", createUser);
route.get("/getAllUsers", getAllUsers);
route.delete("/deleteUser", deleteUser);
route.patch("/updateUser", updateUser);

module.exports = route;