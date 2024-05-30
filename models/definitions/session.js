const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class sessions extends Model {}

sessions.init(
    {
        userId: {
            primaryKey: true,
            type: DataTypes.STRING(255),
        },
        token: {
        type: DataTypes.STRING(255),
        allowNull: false,
        },
        userId: {
            allowNull: false,
            type: DataTypes.STRING(255),
            references: {
                model: "users",
                key: "userId",
            },
        },
    },
    {
        timestamps: true,
        paranoid: true,
        tableName: "sessions",
        sequelize,
    }
);

module.exports = sessions;