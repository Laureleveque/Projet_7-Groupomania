// Logique métier

const User = require("../modele/user");

/* route GET récupérer un profil

exports.getOneUser = (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) =>
      res.status(403).json({ message: "unauthorized request" })
    );
};
*/

// route POST création d'un profil utilisateur

exports.createUser = (req, res, next) => {
  const userObject = JSON.parse(req.body.user);
  delete userObject_id; // suppression de l'identifiant généré automatiquement par MongoDB
  const user = new User({
    userId: this.userId,
    pseudo: this.pseudo,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  user
    .save()
    .then(() => res.status(201).json({ message: "Profil créé !" }))
    .catch((error) => res.status(400).json({ error }));
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
