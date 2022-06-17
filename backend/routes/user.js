// Logique de route

const express = require("express");
const router = express.Router();

const userCtrl = require("../controleurs/user");

const multer = require("../middleware/multerconfig");

const auth = require("../middleware/auth");

// CRUD avec middleware d'authentification auth

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/logout", auth, userCtrl.logout);
router.get("/:id", auth, userCtrl.getProfil);
router.put("/:id", auth, userCtrl.modifyProfil);
router.delete("/:id", auth, userCtrl.deleteUser);

// on exporte le routeur de ce fichier

module.exports = router;
