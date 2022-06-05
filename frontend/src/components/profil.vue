<!-- composant Profil -->

<template>
  <body>
    <header>
      <LogoHeader />
      <NavigationPage />
    </header>

    <!--   inscription: création du profil  -->

    <main>
      <form method="post">
        <div id="profil">
          <div id="photo">
            <img v-bind:src="images" alt="" />
          </div>
          <br />
          <div>
            <label for="pseudo"> Nom d'utilisateur : </label><br />
            <input type="text" v-model="pseudo" id="pseudo" required />
          </div>
          <br />

          <div>
            <label for="interets">Intérêts : </label><br />
            <input type="text" v-model="interets" id="interets" />
          </div>

          <!--  création du profil si inscription -->

          <button type="submit" v-on:click="send">Créer mon profil</button>
        </div>
      </form>

      <!--  bouton modification du profil si déja inscrit 
      
        <router-link to="/accueil">
          <button v-on:click="modifyProfil()" type="submit">
            Modifier mon profil
          </button>
        </router-link>
      -->

      <!--   suppression du compte  -->

      <router-link to="/delete">
        <p v-on:click="deleteProfil()">Supprimer mon compte</p>
      </router-link>
    </main>
  </body>
</template>

<script>
//import { getTransitionRawChildren } from "vue";
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";

export default {
  name: "ProfilPage",

  components: {
    LogoHeader,
    NavigationPage,
  },

  data() {
    return {
      pseudo: "",
      photo: "./assets/images/",
      email: "",
      interets: "",
    };
  },
  methods: {
    // création du profil

    send() {
      fetch("http://localhost:3000/api/user/createProfil", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(
          // transformation en JSON
          {
            userId: this.userId,
            photo: this.photo,
            pseudo: this.pseudo,
            interets: this.interets,
          }
        ),
      })
        .then(function (res) {
          // réponse à la requête

          if (res.ok) {
            // vérification déroulement de la requête
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function () {
          // récupération de l'identifiant du profil
          //document.location.href = "/#/profil";
          // "votre profil est créé"
        })

        .catch(function (err) {
          console.error(err);
        });
    },

    // récupérer un profil

    getOneUser() {
      fetch("http://localhost:3000/api/user/getOneUser:id", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(
          // transformation en JSON
          {
            photo: this.photo,
            pseudo: this.pseudo,
            interets: this.interets,
          }
        ),
      })
        .then(function (res) {
          // réponse à la requête

          if (res.ok) {
            // vérification déroulement de la requête
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function () {})

        .catch(function (err) {
          console.error(err);
        });
    },

    // suppression du compte

    deleteUser() {
      fetch("http://localhost:3000/api/user/deleteUser/:id", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(
          // transformation en JSON
          {
            userId: this.userId,
            photo: this.photo,
            pseudo: this.pseudo,
            email: this.email,
            interet: this.interet,
          }
        ),
      })
        .then(function (res) {
          // réponse à la requête

          if (res.ok) {
            // vérification déroulement de la requête
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function () {
          document.location.href = "/#/delete"; //
        })

        .catch(function (err) {
          console.error(err);
        });
    },

    // modifier le profil

    modifyProfil() {
      fetch("http://localhost:3000/api/user/modifyProfil/:id", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          userId: this.userId,
          photo: this.photo,
          pseudo: this.pseudo,
          interet: this.interet,
        }), // transformation en JSON
      })
        .then(function (res) {
          // réponse à la requête

          if (res.ok) {
            // vérification déroulement de la requête
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function () {
          document.location.href = "/#/profil";
          //msg : "votre profil est modifié"
        })

        .catch(function (err) {
          console.error(err);
        });
    },
  },
};
</script>

<style>
body {
  background-color: #4e5166;
}

#profil {
  border: 2px solid transparent;
  margin: 40px auto;
}

#pseudo,
#email,
#interets {
  width: 400px;
  height: 30px;
  margin-bottom: 20px;
}

img {
  width: 30%;
  margin: 40px;
  padding: 15px;
}

#photo {
  border: 2px solid #737fe0;
  border-radius: 50%;
  padding: 30px 30px;
  width: 50px;
  height: 50px;
  margin: 30px auto;
}

button {
  background: #737fe0;
  color: white;
  font-size: 1em;
  font-weight: bold;
  width: 200px;
  height: 50px;
  transform: scale(1);
  border-radius: 20px;
  border: 2px solid #737fe0;
  margin-top: 40px;
}

button:hover {
  transform: scale(1.15);
}

p {
  color: #ffd7d7;
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 300;
  }

  #profil {
    width: 90%;
    padding-left: 10px;
    padding-right: 10px;
  }

  #pseudo,
  #email,
  #interets {
    width: 90%;
  }
  img {
    width: 60%;
  }
  .cadre {
    width: 90%;
  }
}
</style>
