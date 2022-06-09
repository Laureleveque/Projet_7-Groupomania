<!-- composant Login -->

<template>
  <body>
    <header>
      <LogoHeader />
    </header>

    <h1>Connexion au réseau social de Groupomania</h1>


<main>
      <form @submit="checkForm" method="post">
        <div>
        <label for="email">Email : </label><br />
        <input type="email" v-model="email" id="email" required />
      </div>

      <div>
        <label for="password"> Mot de passe : </label><br />
        <input type="password" v-model="password" id="password" required />
      </div>

 <p v-if="errors.length">
          <b>Merci de corriger les erreurs suivantes :</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>

      <button type="submit">Se connecter</button>
    </form>
    </main>
  </body>
</template>

<script>
import router from "@/router";
import LogoHeader from "../components/logo.vue";

export default {
  name: "LoginPage",
  components: {
    LogoHeader,
  },

  data() {
    return {
      errors: [],
      email: "",
      password: "",
    };
  },

  methods: {

     checkForm(e) {
      // gestion des erreurs
      this.errors = [];

      // vérification si email non vide et format requis
      var re =
        /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

      if (!this.email || !re.test(this.email)) {
        this.errors.push("Inscrire une adresse mail valide");
      }

      // vérification du mot de passe entre 3 et 10 cararctères
      if (this.password.length < 3 || this.password.length > 10) {
        this.errors.push(
          "Mot de passe entre 3 et 10 caractères"
        );
      }


      //si aucune erreur
      if (!this.errors.length) {
        this.send(); 
      }
      e.preventDefault();
    },

    // envoi requête post pour connexion

    send() {
      fetch("http://localhost:3000/api/user/login", {

        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },

        body: JSON.stringify(
          {
            email: this.email,
            password: this.password
          }
        ) // transformation en JSON       
      })

      .then(function (res) { // réponse à la requête
        if (res.ok) { // vérification déroulement de la requête
          return res.json(); // résultat de la requête au format json (promise)
        }
      })

      .then(function (value) {
        localStorage.setItem("user-token", value.token);
        localStorage.setItem("user-id", value.userId);
        router.push('/posts'); // lien vers la page accueil avec l'identifiant du profil
      })
      .catch(function (err) {
        console.error(err);
      })
    }
  }
}

</script>

<style scoped lang="scss">
body {
  background-color: #4e5166;
}

#email {
  width: 400px;
  height: 30px;
  margin-bottom: 20px;
}

#password {
  width: 400px;
  height: 30px;
  margin-bottom: 40px;
}

button {
  background: white;
  color: #4e5166;
  font-size: 1em;
  font-weight: bold;
  width: 130px;
  height: 40px;
  transform: scale(1);
  border-radius: 20px;
  border: 2px solid #4e5166;
}
button:hover {
  transform: scale(1.15);
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 600;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
  }
  #email,
  #password {
    width: 90%;
  }
}
</style>
