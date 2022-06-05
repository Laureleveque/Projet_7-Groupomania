// création d'un schéma de données pour l'utilisateur

// utilisation de mongoose pour créer un schéma de données pour la base de données MongoDB
const mongoose = require("mongoose");

// assure le caractère unique de l'email
const uniqueValidator = require("mongoose-unique-validator"); // ???

// validation de l'email
const { isEmail } = require("validator");

// datation
const { timeStamp } = require("console");

const { pathToFileURL } = require("url");

// création du schéma de données
const userSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true, // ???
      validate: [isEmail],
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minLength: 3,
    },
    imageUrl: {
      type: String,
      default: "./uploads/profil/user.png",
    },

    pseudo: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 10,
      trim: true,
    },

    interets: {
      type: String,
    },

    likes: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

// améliore les messages d'erreur lors de l'enregistrement de données uniques
userSchema.plugin(uniqueValidator);

// exportation de ce schéma en tant que modèle Mongoose
module.exports = mongoose.model("User", userSchema);
