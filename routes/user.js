const express = require("express");

const userController = require("../controller/user");

const router = express.Router();

router.get("/service", userController.getService);
router.post("/user", userController.postUser);
// router.post("/user/:id", userController.postUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
