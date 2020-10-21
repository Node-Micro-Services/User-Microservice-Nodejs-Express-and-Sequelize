const Sequelize = require("sequelize").Sequelize;

const sequelize = require("../util/database");
const User = require("./user");

const UserService = sequelize.define(
    "userService",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        serviceId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = UserService;
