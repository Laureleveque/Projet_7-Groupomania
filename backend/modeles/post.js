// création d'un schéma de données pour un post

const mongoose = require("mongoose"); // importation de mongoose

// appel de la méthode Schema

const postSchema = mongoose.Schema({
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

  creatorId: {
    type: String,
  },

  imageUrl: {
    type: String,
  },
});

// exportation de ce schéma avec la méthode Model (transforme ce modèle en un modèle utilisable)
module.exports = mongoose.model("Post", postSchema);
