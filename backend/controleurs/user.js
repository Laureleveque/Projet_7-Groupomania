// Logique métier

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const User = require("../modeles/user");

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
            });

            newUser
              .save()
              .then(() => {
                res.status(201).json({ user: newUser._id });
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

// fin de session de l'utilisateur

exports.logout = (req, res, next) => {
  /*res.status(200).json({
    token: {
      expiresIn: "0.01h",
    },
  });*/
  localStorage.removeItem("user-token");
  res.status(200);
};
