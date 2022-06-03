// création d'un schéma de données pour l'utilisateur'

// utilisation de mongoose pour créer un schéma de données pour la base de données MongoDB
const mongoose = require("mongoose");

const { timeStamp } = require("console");

const { pathToFileURL } = require("url");

// création d'un schéma de données
const userSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      default: "./profil/image.png",
    },

    pseudo: { type: String, required: true, unique: true, trimp: true },

    interets: {
      type: String,
    },

    likes: {
      type: [String],
    },
  },
  {
    timeStamps: true,
  }
);

// exportation de ce schéma en tant que modèle Mongoose
module.exports = mongoose.model("User", userSchema);
