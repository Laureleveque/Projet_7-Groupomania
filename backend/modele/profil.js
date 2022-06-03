// création d'un schéma de données pour le profil

// utilisation de mongoose pour créer un schéma de données pour la base de données MongoDB
const mongoose = require("mongoose");

// création d'un schéma de données
const profilSchema = mongoose.Schema({
  userId: { type: String, required: true },
  imageUrl: { type: String, required: true },
  pseudo: { type: String, required: true, unique: true, trimp: true },
  interets: { type: String },
});

// exportation de ce schéma en tant que modèle Mongoose
module.exports = mongoose.model("Profil", profilSchema);
