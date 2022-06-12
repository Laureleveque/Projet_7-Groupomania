// création d'un schéma de données pour un post

const mongoose = require("mongoose"); // importation de mongoose

// la méthode Schéma de mongoose permet de créer un schéma de données pour la base de données MongoDB

const postSchema = mongoose.Schema({
  postId: {
    type: String,
    require: true,
  },

  //timestamps: { type: Number },

  commentaire: {
    type: String,
    trim: true,
  },

  imageUrl: {
    type: String,
  },

  likes: {
    type: [String],
  },
});

// exportation de ce schéma avec la méthode Model (transforme ce modèle en un modèle utilisable)
module.exports = mongoose.model("Post", postSchema);
