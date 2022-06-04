const bcrypt = require("bcrypt");
const verif = require("jsonwebtoken");
const User = require("../modeles/user");

// création d'un nouvel utilisateur

exports.signup = (req, res, next) => {
  console.log(req.body);
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const auth = new Auth({
        email: req.body.email,
        password: hash,
      });
      auth
        .save()
        .then(() => res.status(201).json({ user: user._id }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ message: "erreur serveur" }));
};

// connection de l'utilisateur

exports.login = (req, res, next) => {
  Auth.findOne({ email: req.body.email })
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
