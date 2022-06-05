// création d'un schéma de données pour l'utilisateur

// utilisation de mongoose pour créer un schéma de données pour la base de données MongoDB
const mongoose = require("mongoose");

// assure le caractère unique de l'email
const uniqueValidator = require("mongoose-unique-validator"); // ???

// validation de l'email
const { isEmail } = require("validator");

// création du schéma de données
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail],
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },
});

// améliore les messages d'erreur lors de l'enregistrement de données uniques
userSchema.plugin(uniqueValidator);

// exportation de ce schéma en tant que modèle Mongoose
module.exports = mongoose.model("User", userSchema);
