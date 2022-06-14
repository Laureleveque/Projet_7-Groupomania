// création d'un schéma de données pour un post

const mongoose = require("mongoose"); // importation de mongoose

// appel de la méthode Schema

const postSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
  },

  pseudo: {
    type: String,
  },

  date: {
    type: String,
  },

  likes: {
    type: Number,
    required: true,
  },

  usersLiked: ["String <userId>"],

  text: {
    type: String,
    trim: true,
  },

  imageUrl: {
    type: String,
  },
});

// exportation de ce schéma avec la méthode Model (transforme ce modèle en un modèle utilisable)
module.exports = mongoose.model("Post", postSchema);
