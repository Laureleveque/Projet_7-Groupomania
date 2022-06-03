const express = require("express");
const router = express.Router();
const userCtrl = require("../controleur/auth");

router.post("/signup", jwtCtrl.signup); //
router.post("/login", jwtCtrl.login);

module.exports = router;
