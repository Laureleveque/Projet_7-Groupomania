// création d'un schéma de données pour un post

const mongoose = require("mongoose"); // importation de mongoose

// la méthode Schéma de mongoose permet de créer un schéma de données pour la base de données MongoDB
const postSchema = mongoose.Schema({
  date: { type: Number },
  commentaire: { type: String },
  imageUrl: { type: String },
  likes: { type: Number },
  usersLiked: ["String <userId>"],
});

// exportation de ce schéma avec la méthode Model (transforme ce modèle en un modèle utilisable)
module.exports = mongoose.model("Post", postSchema);
