// Logique de route

const express = require("express");
const router = express.Router();

const multer = require("../middleware/multerconfig");

const userCtrl = require("../controleurs/user");

const auth = require("../middleware/auth");

// CRUD avec middleware d'authentification auth

router.post("/signup", auth, userCtrl.signup);
router.post("/login", auth, userCtrl.login);
//router.get("/logout", auth, userCtrl.logout);

router.get("/", auth, userCtrl.getAllUsers); // récupérer tous les utilisateurs
router.get("/:id", auth, userCtrl.getOneUser); // récupérer un utilisateur
router.put("/:id", auth, multer, userCtrl.modifyUser); // modification des données d'un utilisateur
router.delete("/:id", auth, userCtrl.deleteUser); // suppression d'un utilisateur

// on exporte le routeur de ce fichier
module.exports = router;
