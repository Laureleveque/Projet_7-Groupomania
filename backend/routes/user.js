// Logique de route

const express = require("express");
const router = express.Router();

const userCtrl = require("../controleurs/user");

const auth = require("../middleware/auth");

// CRUD avec middleware d'authentification auth

router.post("/signup", userCtrl.signup);
router.post("/login", auth, userCtrl.login);
router.get("/logout", auth, userCtrl.logout);

// on exporte le routeur de ce fichier
module.exports = router;
