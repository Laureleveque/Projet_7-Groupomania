// Logique de route

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multerconfig");
const profilCtrl = require("../controleur/profil");

// CRUD avec middleware d'authentification auth
router.post("/", auth, multer, profilCtrl.createProfil);
router.get("/:id", auth, profilCtrl.getOneProfil);
router.put("/:id", auth, multer, profilCtrl.modifyProfil);
router.delete("/:id", auth, profilCtrl.deleteProfil);

module.exports = router; // on exporte le routeur de ce fichier
