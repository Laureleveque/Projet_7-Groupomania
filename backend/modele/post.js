// création d'un schéma de données pour un post

const mongoose = require("mongoose"); // importation de mongoose

// la méthode Schéma de mongoose permet de créer un schéma de données pour la base de données MongoDB
const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Number, required: true },
  commentaire: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number, required: true },
  usersLiked: ["String <userId>"],
});

// exportation de ce schéma avec la méthode Model (transforme ce modèle en un modèle utilisable)
module.exports = mongoose.model("Post", postSchema);
