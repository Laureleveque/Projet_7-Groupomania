// Logique de route

const express = require("express");
const router = express.Router();

const multer = require("../middleware/multerconfig");

const profilCtrl = require("../controleurs/profil");

const auth = require("../middleware/auth");

// CRUD avec middleware d'authentification auth

router.get("/:id", auth, profilCtrl.getOneProfil); // récupérer un utilisateur
router.post("/:id", auth, profilCtrl.createProfil); // création du profil
router.put("/:id", auth, multer, profilCtrl.modifyProfil); // modification des données d'un utilisateur
router.delete("/:id", auth, profilCtrl.deleteProfil); // suppression d'un utilisateur

// on exporte le routeur de ce fichier
module.exports = router;
