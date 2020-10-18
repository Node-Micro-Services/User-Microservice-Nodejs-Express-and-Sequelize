const Sequelize = require("sequelize").Sequelize;

const sequelize = require("../util/database");

const UserAddress = sequelize.define(
    "userAddress",
    {
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        address1: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        address2: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        state: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        postCode: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = UserAddress;
