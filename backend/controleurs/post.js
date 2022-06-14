// Logique métier

const Post = require("../modeles/post");
const User = require("../modeles/user");

// route GET création d'un post

exports.createPost = (req, res, next) => {
  const post = new Post({
    photo: req.body.photo,
    pseudo: req.body.pseudo,
    date: new Date().toLocaleString(),
    likes: 0,
    text: req.body.text,
    /*imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,*/
  });

  post
    .save()
    .then(() => res.status(201).json({ message: "Post enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

// route DELETE supprimer un post (uniquement par l'auteur ou le modérateur)

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })

    .then((post) => {
      const filename = post.photo.split("/images/")[1];
      //fs.unlink(`images/${filename}`, () => {
      // La fonction fs.unlink() permet de supprimer l'image du fichier
      Post.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Post supprimé !" }))
        .catch((error) => res.status(403).json({ error }));
      //});
    })
    .catch((error) => res.status(500).json({ error }));
};

// route GET récupérer tous les posts

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json({ error }));
};

// route PUT modification d'un post (uniquement par le créateur du post ou le moderateur)

exports.modifyPost = (req, res, next) => {
  /*
        {imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
*/

  Post.updateOne(
    { _id: req.params.id },
    {
      text: req.body.text,
    }
  )
    .then(() => {
      res.status(200).json({ message: "Post modifié" });
    })
    .catch((error) =>
      res.status(403).json({ message: "unauthorized request" })
    );
};

// route like spécifique à l'_id

exports.likePost = (req, res, next) => {
  Postlike.findOne({ _id: req.params.id })
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
          .then(() => res.status(200).json({ message: "Post liké !" }))
          .catch((error) => res.status(400).json({ error }));
      }

      // sinon si l'utilisateur annule son like
      else if (req.body.like == 0) {
        if (post.usersLiked.includes(req.body.userId)) {
          let indexUserLiked = post.usersLiked.indexOf(req.body.userId); // recherche de l'index de l'utilisateur dans le tableau des likes

          post.usersLiked.splice(indexUserLiked, 1);
          Post.updateOne(
            { _id: req.params.id },
            {
              // mise à jour de la sauce
              post,
              usersLiked: post.usersLiked,
              likes: post.usersLiked.length, // et mise à jour du nombre de likes dans le tableau
            }
          )
            .then(() => res.status(200).json({ message: "Like supprimé !" }))
            .catch((error) => res.status(400).json({ error }));
        }
      }
    })

    .catch((error) => res.status(500).json({ error }));
};
