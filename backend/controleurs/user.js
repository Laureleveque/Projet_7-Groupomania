// Logique métier

const User = require("../modeles/user");

// route POST récupérer tous les utilisateurs

exports.getAllUsers = (req, res, next) => {
  users
    .find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }));
};

// route GET récupérer un utilisateur

exports.getOneUser = (req, res, next) => {
  console.log(req.params);
  User.findOne({ _id: req.params.id }) // paramètres dans l'url
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ message: "Id inconnu" }));
};

// route PUT modification/mise à jour d'un utilisateur

exports.modifyUser = (req, res, next) => {
  const userObject = req.file
    ? {
        ...JSON.parse(req.body.user),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  User.updateOne(
    { _id: req.params.id },
    { ...profilObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Utilisateur modifié !" }))
    .catch((error) =>
      res.status(403).json({ message: "unauthorized request" })
    );
};

// route DELETE supprimer un utilisateur

exports.deleteUser = (req, res, next) => {
  User.findOne({ _id: req.params.id });

  then((user) => {
    const filename = user.imageUrl.split("/images/")[1];
    fs.unlink(`images/${filename}`, () => {
      // La fonction fs.unlink() permet de supprimer l'image du fichier
      User.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Utilisateur supprimé !" }))
        .catch((error) =>
          res.status(403).json({ message: "unauthorized request" })
        );
    });
  }).catch((error) => res.status(500).json({ error }));
};
