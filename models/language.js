const Sequelize = require("sequelize").Sequelize;

const sequelize = require("../util/database");

const Language = sequelize.define(
    "language",
    {
        userId: {
            primaryKey: true,
            type: Sequelize.STRING,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = Language;
