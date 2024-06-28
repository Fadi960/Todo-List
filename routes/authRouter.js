/*const route = require("express").Router();

const {
    login,
    getUser,
    /*logout,
    resetPassword,
    updateUser,
    deleteUser,
    createUser,*/
//} = require("../controller/authController");

//route.post("/login", login);
//route.get("/getUser", getUser);
/*route.put("/updateUser", updateUser);
route.post("/createUser", createUser);
route.delete("/deleteUser", deleteUser)
route.get("/logout",logout);
route.get("/resetPassword",resetPassword);*/

//module.exports = route;
const route = require('express').Router();


const {
    login,
    logout,
    resetPassword,
} = require("../controller/authController")


route.post("/login", login);
route.delete("/logout", logout);
route.patch("/restPassword", resetPassword);


module.exports = route;