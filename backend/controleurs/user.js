// Logique métier

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const User = require("../modeles/user");

const fs = require("fs");

// inscription d'un nouvel utilisateur
exports.signup = (req, res, next) => {
  User.findOne(
    {
      email: req.body.email,
    } // verification si email existant
  )

    .then((user) => {
      if (user) {
        // si existant déjà
        return res.status(400).json({ error: "email déjà utilisé" });
      } else {
        // si non existant

        bcrypt // appel de la fonction de cryptage

          .hash(req.body.password, 10)

          .then((hash) => {
            const newUser = new User({
              // nouvel utilisateur créé
              email: req.body.email,
              pseudo: req.body.pseudo,
              password: hash,
              photo: `${req.protocol}://${req.get("host")}/images/icon.png`,
            });

            newUser
              .save()
              .then(() => {
                res.status(201).json({
                  userId: newUser._id,
                  token: jwt.sign(
                    { userId: newUser._id },
                    "RANDOM_TOKEN_SECRET",
                    {
                      expiresIn: "24h",
                    }
                  ),
                });
              })

              .catch((error) => res.status(400).json({ error }));
          })

          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

// connection de l'utilisateur

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }) // recherche de l'email unique

    .then((user) => {
      if (!user) {
        // si mongoose ne le trouve pas
        return res.status(401).json({ message: "Utilisateur non trouvé !" });
      }

      // si email trouvé : fonction compare avec le password enregistré
      bcrypt
        .compare(req.body.password, user.password)

        .then((valid) => {
          if (!valid) {
            // si ne correspond pas
            return res
              .status(401)
              .json({ message: "Mot de passe incorrect !" });
          }

          // si comparaison ok
          res.status(200).json({
            // renvoi d'un fichier json avec l'identifiant de l'utilisateur dans la base et un token
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              // le token contient l'id et une clé secrète
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ message: "erreur serveur" }));
};

// Déconnexion de l'utilisateur

exports.logout = (req, res, next) => {
  localStorage.removeItem("user-token");
  res.status(200);
};

// récupération des infos de l'utilisateur

exports.getProfil = (req, res, next) => {
  User.findOne({ _id: req.params.id }) // recherche de l'email unique

    .then((user) => {
      if (!user) {
        // si mongoose ne le trouve pas
        return res.status(401).json({ message: "Utilisateur non trouvé !" });
      }

      res.status(200).json({
        email: user.email,
        pseudo: user.pseudo,
        photo: user.photo,
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

// suppression du compte d'un utilisateur

exports.deleteUser = (req, res, next) => {
  User.findOne({ _id: req.params.id })

    .then((user) => {
      const filename = user.photo.split("/images/")[1];
      if (filename != "icon.png") {
        // La fonction fs.unlink() permet de supprimer l'image du fichier
        fs.unlink(`images/${filename}`, () => {
          User.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Compte supprimé" }))
            .catch((error) => res.status(403).json({ error }));
        });
      } else {
        User.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Compte supprimé" }))
          .catch((error) => res.status(403).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

// mise à jour des infos de l'utilisateur

exports.modifyProfil = (req, res, next) => {
  User.updateOne(
    { _id: req.params.id },
    {
      email: req.body.email,
      pseudo: req.body.pseudo,
    }
  )
    .then(() => {
      // Si on a passé une image à la requête
      if (req.file) {
        User.updateOne(
          { _id: req.params.id },
          {
            photo: `${req.protocol}://${req.get("host")}/images/${
              req.file.filename
            }`,
          }
        ).then(() => {
          res.status(200).json({ message: "Profil modifié" });
        });
      } else {
        res.status(200).json({ message: "Profil modifié" });
      }
    })
    .catch((error) =>
      res.status(403).json({ message: "unauthorized request" })
    );
};
