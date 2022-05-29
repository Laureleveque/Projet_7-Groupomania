// Logique métier

const Profil = require("../modele/profil");

// route GET récupérer un profil

exports.getOneProfil = (req, res, next) => {
  Profil.findOne({ _id: req.params.id })
    .then((profil) => res.status(200).json(profil))
    .catch((error) =>
      res.status(403).json({ message: "unauthorized request" })
    );
};

// route POST création d'un profil

exports.createProfil = (req, res, next) => {
  const profilObject = JSON.parse(req.body.profil);
  delete profilObject_id; // suppression de l'identifiant généré automatiquement par MongoDB
  const profil = new Profil({
    ...profilObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  profil
    .save()
    .then(() => res.status(201).json({ message: "Profil enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

// route DELETE supprimer un compte

exports.deleteProfil = (req, res, next) => {
  Profil.findOne({ _id: req.params.id });

  then((profil) => {
    const filename = profil.imageUrl.split("/images/")[1];
    fs.unlink(`images/${filename}`, () => {
      // La fonction fs.unlink() permet de supprimer l'image du fichier
      Profil.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Profil supprimé !" }))
        .catch((error) =>
          res.status(403).json({ message: "unauthorized request" })
        );
    });
  }).catch((error) => res.status(500).json({ error }));
};

// route PUT modification/mise à jour d'un profil

exports.modifyProfil = (req, res, next) => {
  const profilObject = req.file
    ? {
        ...JSON.parse(req.body.profil),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  Profil.updateOne(
    { _id: req.params.id },
    { ...profilObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Profil modifié !" }))
    .catch((error) =>
      res.status(403).json({ message: "unauthorized request" })
    );
};
