const Sequelize = require("sequelize").Sequelize;

const sequelize = require("../util/database");

const UserLanguage = sequelize.define(
    "userLanguage",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        skillLevel: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = UserLanguage;
