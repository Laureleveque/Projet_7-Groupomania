const Post = require("../modele/post");

// route POST création d'un post

exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.profil);
  //delete profilObject_id; // suppression de l'identifiant généré automatiquement par MongoDB
  const post = new Post({
    post: this.post,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  post
    .save()
    .then(() => res.status(201).json({ message: "Commentaire enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

// route DELETE supprimer un post (uniquement par l'auteur ou le modérateur)

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id });

  then((post) => {
    const filename = post.imageUrl.split("/images/")[1];
    fs.unlink(`images/${filename}`, () => {
      // La fonction fs.unlink() permet de supprimer l'image du fichier
      Post.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Commentaire supprimé !" }))
        .catch((error) =>
          res.status(403).json({ message: "unauthorized request" })
        );
    });
  }).catch((error) => res.status(500).json({ error }));
};

// route GET récupérer tous les posts

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(400).json({ error }));
};

// route GET récupérer un post

exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => res.status(200).json(post))
    //ajouter la possibilité de répondre au post

    .catch((error) =>
      res.status(403).json({ message: "unauthorized request" })
    );
};

// route PUT modification d'un post (uniquement par le créateur du post ou le moderateur)

exports.modifyPost = (req, res, next) => {
  const postObject = req.file
    ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Commentaire modifié !" }))
    .catch((error) =>
      res.status(403).json({ message: "unauthorized request" })
    );
};

// route like spécifique à l'_id

exports.likePost = (req, res, next) => {
  // recherche du post
  Post.findOne({ _id: req.params.id })

    .then((post) => {
      // si l'utilisateur like et si l'id n'est pas présent dans le tableau des likes
      if (req.body.like == 1 && !post.usersLiked.includes(req.body.userId)) {
        post.usersLiked.push(req.body.userId); // ajout Id de l'utilisateur au tableau des likes
        Post.updateOne(
          { _id: req.params.id },
          {
            // mise à jour du post
            post,
            usersLiked: post.usersLiked,
            likes: post.usersLiked.length, // et mise à jour du nombre de likes dans le tableau
          }
        )
          .then(() => res.status(200).json({ message: "Post likée !" }))
          .catch((error) => res.status(400).json({ error }));
      }
    })

    .catch((error) => res.status(500).json({ error }));
};
