<!-- composant Profil -->

<template>
  <body>
    <header>
      <LogoHeader />
      <NavigationPage />
    </header>

    <!--  modification du profil  -->

    <main>
      <div class="profil">
        
        <div id="photo">
          <img src="../assets/images/icon.png" alt="Photo" />
        </div>
        <br />

        <form @submit="checkForm" method="post">
          <div>
            <br />
            <label for="email">Email :</label><br />
              <input
            type="email"
            name="email"
            v-model="email"
            id="email"
            required
             />
          </div>
          <br/>

        <div>
          <label for="pseudo">Pseudo :</label><br />
          <input
            type="text"
            name="pseudo"
            v-model="pseudo"
            id="pseudo"
            required
          />
        </div>
        <br/>

        <div>
          <label for="password">Mot de passe :</label><br />
          <input type="password" v-model="password" id="password" required />
        </div>

        <p v-if="errors.length">
          <b>Merci de corriger les erreurs suivantes :</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>
 </form>         
          
        
          <button type="submit" v-on:click="checkProfil">Modifier mon profil</button>
          <br />
         
          <button type="submit" v-on:click="deleteProfil">Supprimer mon compte</button>          
      </div>
    </main>
  </body>
</template>

<script>
//import { getTransitionRawChildren } from "vue";
import router from "@/router";
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
      errors : [],
      userId: "",
      photo: "",
      pseudo: "",
      email: "",
      password: ""
    };
  },

  created() {
    fetch("http://localhost:3000/api/user/" + localStorage.getItem("user-id"), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
        body: JSON.stringify({ id: localStorage.getItem("user-id")})
      })

      .then(function (res) {
        if (res.ok) {
          return res.json(); // résultat de la requête au format json (promise)
        }
      })

      .then((res) => {
        this.email = res.email;
        this.pseudo = res.pseudo;
      })

      .catch(function (err) {
        console.error(err);
      });
  },

  methods: {

    checkProfil(e) {
      // gestion des erreurs
      this.errors = [];

      // vérification si email non vide et format requis
      var re =
        /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

      if (!this.email || !re.test(this.email)) {
        this.errors.push("Inscrire une adresse mail valide");
      }

      // vérification du mot de passe entre 3 et 10 cararctères
      if (this.password != "" && (this.password.length < 3 || this.password.length > 10)) {
        this.errors.push(
          "Mot de passe entre 3 et 10 caractères"
        );
      }

      //si aucune erreur
      if (!this.errors.length) {
        this.modifyProfil(); // envoi des données
      }
      e.preventDefault();
    },

    // récupérer un profil

    getUserProfil() {
      fetch("http://localhost:3000/api/profil/:id", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },

      })
        .then(function (res) {
          // réponse à la requête

          if (res.ok) {
            // vérification déroulement de la requête
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function () {
          router.push("/profil");
        })

        .catch(function (err) {
          console.error(err);
        });
    },

    // suppression du compte

    deleteProfil() {
      fetch("http://localhost:3000/api/profil/deleteProfil/:id", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },

        body: JSON.stringify(
          // transformation en JSON
          {
            photo: this.photo,
            pseudo: this.pseudo,
            email: this.email,
            password: this.password,
          }
        ),
      })
        .then(function (res) {
          if (res.ok) {
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function (res) {
          console.log(res);
          if (this.userId == this.profilUserId) {
            localStorage.clear();
            router.push("/delete");
          }
        })

        .catch(function (err) {
          console.error(err);
        })
    },

// modifier le profil

    modifyProfil() {
      fetch("http://localhost:3000/api/user/" + localStorage.getItem("user-id"), {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },

        body: JSON.stringify({
          id: localStorage.getItem("user-id"),
          pseudo: this.pseudo,
          email: this.email,
          password: this.password,
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
          // afficher message de confirmation
        })

        .catch(function (err) {
          console.error(err);
         })

    }}};
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
#password {
  width: 400px;
  height: 30px;
  margin-bottom: 20px;
}

/*img {
  width: 30%;
  margin: 40px;
  padding: 15px;
}*/

#photo {
  border: 3px solid #737fe0;
  width:100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 0 0 0;
}

#photo img {
  max-width: none;
  margin-top: -16px;
 
  width: 100px;
  height: 100px;
}

textarea {
  font-family: lato;
}

button {
  background: #737fe0;
  color: white;
  font-size: 1em;
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
  #password {
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
