// Logique métier

const auth = require("jsonwebtoken");

const Profil = require("../modeles/profil");

// route GET récupérer le profil d'un utilisateur

exports.getUserProfil = (req, res, next) => {
  console.log(req.params);
  Profil.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ message: "Id inconnu" }));
};

// route PUT modification/mise à jour d'un profil utilisateur

exports.modifyProfil = (req, res, next) => {
  const profilObject = req.file
    ? {
        ...JSON.parse(req.body.user),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  Profil.updateOne(
    { _id: req.params.id },
    { ...profilObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Profil modifié" }))
    .catch((error) =>
      res.status(403).json({ message: "unauthorized request" })
    );
};

// route DELETE supprimer un utilisateur

exports.deleteProfil = (req, res, next) => {
  Profil.findOne({ _id: req.params.id });

  then((profil) => {
    const filename = user.imageUrl.split("/images/")[1];
    fs.unlink(`images/${filename}`, () => {
      // La fonction fs.unlink() permet de supprimer l'image du fichier
      Profil.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Compte supprimé" }))
        .catch((error) =>
          res.status(403).json({ message: "unauthorized request" })
        );
    });
  }).catch((error) => res.status(500).json({ error }));
};
