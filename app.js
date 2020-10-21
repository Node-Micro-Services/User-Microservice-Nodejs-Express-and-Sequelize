const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk");

const sequelize = require("./util/database");

const UserRoute = require("./routes/user");

const User = require("./models/user");
const UserAddress = require("./models/userAddress");
const UserLanguage = require("./models/userLanguage");
const UserService = require("./models/userService");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("<H1>Working User Services</H1>");
});

app.use("/", UserRoute);

User.hasOne(UserAddress, { foreignKey: "userId" });
User.hasMany(UserLanguage, { foreignKey: "userId" });
User.hasOne(UserService, { foreignKey: "userId" });

sequelize
    // .sync({force: true})  ---> to overwrite the tables better say format all...
    .sync({force: true})
    .then((result) => {
        // console.log(result);
        app.listen(8080, () => {
            console.log(chalk.red.inverse.bold("SERVER IS LIVE AT PORT 8080"));
        });
    })
    .catch((error) => {
        console.log(error);
    });
