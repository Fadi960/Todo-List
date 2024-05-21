const {Model , DataTypes} = require("sequelize");

const sequelize = require("../../bin/dbConnection");

class tasks extends Model {}

tasks.init({
    tasksId: {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
}, 
{
  timestamps: true,
  paranoid: true,
  tableName: "tasks",
  sequelize,
});

module.exports = tasks;