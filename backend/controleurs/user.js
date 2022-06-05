// Logique métier

const bcrypt = require("bcrypt");

const auth = require("jsonwebtoken");
const User = require("../modeles/user");

// création d'un nouvel utilisateur

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
              password: hash,
            });

            /*User.create({
              // nouvel utilisateur créé
              email: req.body.email,
              password: hash,
            })*/

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
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)

        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ message: "erreur serveur" }));
};

// fin de session de l'utilisateur
/*
exports.logout = (req, res, next) => {
  
    token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
    expiresIn: "0,01",
    )}
    
    .then(() => res.status(201).json({  }))
    .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ message: "erreur serveur" }));
    
};*/
