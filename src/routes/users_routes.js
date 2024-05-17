const usersController = require("../controllers/users.controler");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/", salt);
const express = require("express");
const router = express.Router();

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/user-Profile", usersController.userProfile);
// router.post("/otpLogin", usersController.otpLogin);
// router.post("/verifyOTP", usersController.verifyOTP);

module.exports = router;