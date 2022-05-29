// création d'un schéma de données pour un profil

// utilisation de mongoose pour créer un schéma de données pour la base de données MongoDB
const mongoose = require("mongoose");

// assure le caractère unique de l'email
const uniqueValidator = require("mongoose-unique-validator");

// création d'un schéma de données
const profilSchema = mongoose.Schema({
  //photo: { type: String },
  pseudo: { type: String },
  secteur: { type: String },
  ville: { type: String },
  interets: { type: String },
  sports: { type: String },
});

// améliore les messages d'erreur lors de l'enregistrement de données uniques
profilSchema.plugin(uniqueValidator);

// exportation de ce schéma en tant que modèle Mongoose
module.exports = mongoose.model("Profil", profilSchema);
