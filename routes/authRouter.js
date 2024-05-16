const route = require("express").Router();

const {
    login,
    logout,
    resetPassword,
} = require("../controller/authController");

route.get("/login", login);
route.get("/logout",logout);
route.get("/resetPassword",resetPassword);

module.exports = route;