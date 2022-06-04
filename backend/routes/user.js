// Logique de route

const express = require("express");
const router = express.Router();

const multer = require("../middleware/multerconfig");

const authCtrl = require("../controleurs/auth");
const userCtrl = require("../controleurs/user");

const verif = require("../middleware/verif");

// CRUD avec middleware d'authentification jwt

router.post("/", verif, multer, authCtrl.signUp); // inscription

router.get("/", verif, userCtrl.getAllUsers); // récupérer tous les utilisateurs

router.get("/:id", verif, userCtrl.getOneUser); // récupérer un utilisateur

router.put("/:id", verif, multer, userCtrl.modifyUser); // modification des données d'un utilisateur

router.delete("/:id", verif, userCtrl.deleteUser); // suppression d'un utilisateur

// on exporte le routeur de ce fichier
module.exports = router;
