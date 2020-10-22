const express = require("express");

const userController = require("../controller/user");

const router = express.Router();

router.get("/service", userController.getService);
router.get("/user/:id", userController.getUser);
router.post("/user", userController.postUser);
router.patch("/user", userController.patchUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
