const express = require("express");
const router = express.Router();
const userCtrl = require("../controleur/user");

router.post("/signup", userCtrl.signup); //
router.post("/login", userCtrl.login);

//router.post("/profil", userCtrl.profil);
//router.post("/delete", userCtrl.delete);

module.exports = router;
