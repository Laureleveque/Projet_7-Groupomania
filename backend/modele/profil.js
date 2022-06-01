// création d'un schéma de données pour un profil

// utilisation de mongoose pour créer un schéma de données pour la base de données MongoDB
const mongoose = require("mongoose");

// création d'un schéma de données
const profilSchema = mongoose.Schema({
  //photo: { type: String },
  pseudo: { type: String },
  email: { type: String },
  interets: { type: String },
});

// exportation de ce schéma en tant que modèle Mongoose
module.exports = mongoose.model("Profil", profilSchema);
