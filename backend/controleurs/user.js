// Logique métier

const bcrypt = require("bcrypt");
const auth = require("jsonwebtoken");
const User = require("../modeles/user");

// création d'un nouvel utilisateur

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      User.create({
        // nouvel utilisateur créé
        email: req.body.email,
        password: hash,
      })
        .then((user) => res.status(201).json({ user: user._id }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ message: "erreur serveur" }));
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
