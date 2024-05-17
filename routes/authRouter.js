const route = require("express").Router();

const {
    login,
    logout,
    resetPassword,
    updateUser,
    deleteUser,
    createUser,
} = require("../controller/authController");

route.get("/login", login);
route.put("/updateUser", updateUser);
route.post("/createUser", createUser);
route.delete("/deleteUser", deleteUser)
route.get("/logout",logout);
route.get("/resetPassword",resetPassword);

module.exports = route;