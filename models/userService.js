const Sequelize = require("sequelize").Sequelize;

const sequelize = require("../util/database");

const UserService = sequelize.define(
    "userService",
    {
        userId: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        serviceId: {
            type: Sequelize.toString,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = UserService;
