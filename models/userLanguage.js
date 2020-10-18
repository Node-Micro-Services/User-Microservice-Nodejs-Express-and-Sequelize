const Sequelize = require("sequelize").Sequelize;

const sequelize = require("../util/database");

const UserLanguage = sequelize.define(
    "userLanguage",
    {
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
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
