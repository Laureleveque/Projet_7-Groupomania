// création d'un schéma de données pour l'utilisateur

// utilisation de mongoose pour créer un schéma de données pour la base de données MongoDB
const mongoose = require("mongoose");

// assure le caractère unique de l'email
const uniqueValidator = require("mongoose-unique-validator");

// création du schéma de données
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  photo: {
    type: String,
    default: "icon.png",
  },

  pseudo: {
    type: String,
    unique: true,
    minlength: 3,
    maxlength: 10,
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
