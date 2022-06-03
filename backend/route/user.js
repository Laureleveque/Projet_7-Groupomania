// Logique de route

const express = require("express");
const router = express.Router();

const multer = require("../middleware/multerconfig");

const userCtrl = require("../controleur/user");

const jwt = require("../middleware/jwt");

// CRUD avec middleware d'authentification auth
router.post("/", jwt, multer, userCtrl.createUser);
//router.get("/:id", jwt, userCtrl.getOneProfil);
router.put("/:id", jwt, multer, userCtrl.modifyUser);
router.delete("/:id", jwt, userCtrl.deleteUser);

module.exports = router; // on exporte le routeur de ce fichier
