const {Model , DataTypes} = require("sequelize");

const sequelize = require("../../bin/dbConnection");

class tasks extends Model {}

tasks.init(
  {
    taskId: {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    description: {
      type: DataTypes.STRING(1000),
    },
    userId: {
      allowNull: false,
      type:  DataTypes.STRING(255),
      references: {
        model: "users",
        key: "userId",
      },
    }
}, 
{
  timestamps: true,
  paranoid: true,
  tableName: "tasks",
  sequelize,
});

module.exports = tasks;