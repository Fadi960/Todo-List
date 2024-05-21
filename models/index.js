const sequelize = require("../bin/dbConnection");

const users = require("./definitions/users");
const tasks = require("./definitions/tasks")

const models = {users, tasks};

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db, models};