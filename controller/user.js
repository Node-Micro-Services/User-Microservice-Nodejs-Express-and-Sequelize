nst chalk = require("chalk");

const User = require("../models/user");
const UserAddress = require("../models/userAddress");
const Address = require("../models/userAddress");
const UserLanguage = require("../models/userLanguage");
const UserService = require("../models/userService");

// completed
exports.getService = (req, res, next) => {
    UserService.findAll().then((result) => {
        const reply = JSON.stringify(result);
        console.log(chalk.green.bold.inverse(reply));
        res.status(200).json({ result });
    });
};

// completed
exports.postUser = (req, res, next) => {
    User.create({
        userId: req.body.userId,
        name: req.body.name,
        gender: req.body.gender,
        profilePicURL: req.body.profilePicURL,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        adharCard: req.body.adharCard,
        dob: req.body.dob,
    })
        .then((result) => {
            Address.create({
                userId: req.body.userId,
                address1: req.body.address.address1,
                address2: req.body.address.address2,
                city: req.body.address.city,
                state: req.body.address.state,
                postalCode: req.body.address.postalCode,
            })
                .then(async (result) => {
                    go = () => {
                        for (var obj in req.body.language) {
                            UserLanguage.create({
                                userId: req.body.userId,
                                name: req.body.language[obj].name,
                                skillLevel: req.body.language[obj].skillLevel,
                            })
                                .then((result) => {
                                    console.log(chalk.red.bold.inverse("UL"));
                                })
                                .catch((error) => {
                                    npm;
                                    console.log(error);
                                });
                        }

                        for (var obj in req.body.services) {
                            UserService.create({
                                userId: req.body.userId,
                                serviceId: req.body.services[obj],
                            })
                                .then((result) => {
                                    console.log(result);
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }
                    };
                    await go();
                    res.status(200).json({ success: "true" });
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(chalk.red.inverse.bold(error));
            res.status(500).json({ sucess: "false" });
        });
};

// completed
exports.deleteUser = (req, res, next) => {
    const USERID = req.params.id;

    async function start() {
        await User.destroy({
            where: { userId: USERID },
        })
            .then((result) => {
                console.log(chalk.yellow.bold.inverse("USER DESTROYED"));
            })
            .catch((error) => {
                console.log(chalk.green.bold.inverse("USER ERROR"));
            });

        await UserAddress.destroy({
            where: { userId: USERID },
        })
            .then((result) => {
                console.log(chalk.yellow.bold.inverse("USERADDRESS DESTROYED"));
            })
            .catch((error) => {
                console.log(chalk.green.bold.inverse("USERADDRESS ERROR"));
            });

        await UserLanguage.destroy({
            where: { userId: USERID },
        })
            .then((result) => {
                console.log(
                    chalk.yellow.bold.inverse("USERLANGUAGE DESTROYED")
                );
            })
            .catch((error) => {
                console.log(chalk.green.bold.inverse("USERLANGUAGE ERROR"));
            });

        await UserService.destroy({
            where: { userId: USERID },
        })
            .then((result) => {
                console.log(chalk.yellow.bold.inverse("USERSERVICE DESTROYED"));
            })
            .catch((error) => {
                console.log(chalk.green.bold.inverse("USERSERVICE ERROR"));
            });
    }
    start();
    res.status(200).json({
        success: "true",
    });
};

// completed
exports.patchUser = (req, res, next) => {
    async function start() {
        await User.update(
            {
                name: req.body.name,
                gender: req.body.gender,
                profilePicURL: req.body.profilePicURL,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                password: req.body.password,
                adharCard: req.body.adharCard,
                dob: req.body.dob,
            },
            {
                where: {
                    userId: req.body.userId,
                },
            }
        );
        await UserAddress.update(
            {
                address1: req.body.address.address1,
                address2: req.body.address.address2,
                city: req.body.address.city,
                state: req.body.address.state,
                postalCode: req.body.address.postalCode,
            },
            {
                where: { userId: req.body.userId },
            }
        );

        await UserLanguage.destroy({
            where: { userId: req.body.userId },
        })
            .then((result) => {
                console.log(
                    chalk.yellow.bold.inverse("USERLANGUAGE DESTROYED")
                );
                for (var obj in req.body.language) {
                    UserLanguage.create({
                        userId: req.body.userId,
                        name: req.body.language[obj].name,
                        skillLevel: req.body.language[obj].skillLevel,
                    })
                        .then((result) => {
                            console.log(chalk.red.bold.inverse("UL"));
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
            .catch((error) => {
                console.log(chalk.green.bold.inverse("USERLANGUAGE ERROR"));
            });

        await UserService.destroy({
            where: { userId: req.body.userId },
        })
            .then((result) => {
                console.log(chalk.yellow.bold.inverse("USERSERVICE DESTROYED"));
                for (var obj in req.body.services) {
                    UserService.create({
                        userId: req.body.userId,
                        serviceId: req.body.services[obj],
                    })
                        .then((result) => {
                            console.log(result);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
            .catch((error) => {
                console.log(chalk.green.bold.inverse("USERSERVICE ERROR"));
            });
    }
    start();
    res.status(200).json({
        success: "true",
    });
};

// completed
exports.getUser = (req, res, next) => {
    const USERID = req.params.id;
    const allDetails = req.query.allDetails;

    if (allDetails == "true") {
        User.findOne({
            where: { userId: USERID },
        })
            .then((user) => {
                UserAddress.findOne({
                    where: { userId: USERID },
                })
                    .then((useraddress) => {
                        UserLanguage.findAll(
                            {
                                where: { userId: USERID}
                            }
                        ).then(userlanguage=>{
                            UserService.findAll(
                                {
                                    where: { userId: USERID}
                                }
                            ).then(userservice=>{
                                res.status(200).json({
                                    user: user,
                                    useraddress: useraddress,
                                    userlanguage: userlanguage,
                                    userservice: userservice,
                                })
                            }).catch(error=>{
                                console.log(chalk.red.bold.inverse(error));
                                res.status(200).json({"success": "false"});
                            })
                        }).catch(error=>{
                            console.log(chalk.red.bold.inverse(error));
                            res.status(200).json({"success": "false"});
                        })
                    })
                    .catch((error) => {
                        console.log(chalk.red.bold.inverse(error));
                        res.status(200).json({ success: "false" });
                    });
            })
            .catch((error) => {
                console.log(chalk.red.bold.inverse(error));
                res.status(200).json({ success: "false" });
            });
    } else {
        User.findOne({
            where: { userId: USERID },
        })
            .then((user) => {
                UserService.findAll({
                    where: { userId: USERID },
                })
                    .then((userservice) => {
                        res.json({
                            user: user,
                            userservice: userservice,
                        });
                    })
                    .catch((error2) => {
                        console.log(chalk.green.bold.inverse(error2));
                        res.status(200).json({ success: "false" });
                    });
            })
            .catch((error) => {
                console.log(chalk.yellow.bold.inverse(error));

                res.status(200).json({ success: "false" });
            });
    }
};
