// création de l'application express

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");

// accès au corps json de la requête
app.use(express.json());

const userRoute = require("./route/user"); // inscription et connexion
const profilRoute = require("./route/profil"); // gestion du profil
const postRoute = require("./route/post"); // gestion des posts

// connection SQL

// CORS : permet à toutes les demandes de toutes les origines d'accéder à l'API (requêtes cross-origin)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// méthode app.use

app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/profil", profilRoute);

// exportation de l'application

module.exports = app;
