// création d'un schéma de données pour l'utilisateur (signup et login)
// utilisation de mongoose pour créer un schéma de données pour la base de données MongoDB
const mongoose = require("mongoose");

// assure le caractère unique de l'email
const uniqueValidator = require("mongoose-unique-validator");

// création d'un schéma de données
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true }, // 1 utilisateur = 1 email
  password: { type: String, required: true },
  photo: { type: string },
  pseudo: { type: String },
  secteur: { type: String },
  ville: { type: String },
  interets: { type: String },
  sports: { type: String },
});

// améliore les messages d'erreur lors de l'enregistrement de données uniques
userSchema.plugin(uniqueValidator);

// exportation de ce schéma en tant que modèle Mongoose
module.exports = mongoose.model("Users", userSchema);
