const Sequelize = require("sequelize").Sequelize;

const sequelize = require("../util/database");

const User = sequelize.define("user", {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    profilePicUrl: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    adharCard: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dob: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = User;
