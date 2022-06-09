// création de l'application express

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const path = require("path");

// module pour accéder aux variables d'environnement
const dotenv = require("dotenv");
dotenv.config();

// accès au corps json de la requête
app.use(express.json());

const postRoutes = require("./routes/post"); // gestion post
const userRoutes = require("./routes/user"); // gestion inscription/login

// connection à MongoDB
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@${process.env.DB_host}/${process.env.DB_name}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

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

app.use(bodyParser.json()); // bon format
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);

// exportation de l'application

module.exports = app;
