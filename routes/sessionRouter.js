const route = require("express").Router();

const { createSession } = require("../controller/sessionController");

route.post("/createSession", createSession);

module.exports = route;