const express = require("express");
const router = express.Router();
const authCtrl = require("../controleurs/auth");

router.post("/signup", verif, authCtrl.signup); //
router.post("/login", verif, authCtrl.login);

module.exports = router;
