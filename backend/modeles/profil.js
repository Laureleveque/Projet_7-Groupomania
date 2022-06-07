// utilisation de mongoose pour créer un schéma de données pour la base de données MongoDB
const mongoose = require("mongoose");

// création du schéma de données profil
const profilSchema = mongoose.Schema({
  imageUrl: {
    type: String,
    default: "./uploads/profil/user.png",
  },

  pseudo: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 10,
    trim: true,
  },

  interets: {
    type: String,
  },
});

// exportation de ce schéma en tant que modèle Mongoose
module.exports = mongoose.model("Profil", profilSchema);
