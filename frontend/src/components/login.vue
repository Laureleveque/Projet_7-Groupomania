<!-- composant Login -->

<template>
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

      <p id="errorLogin"></p>

        <p v-if="errors.length">
          <b>Merci de corriger les erreurs suivantes :</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>
        <h2></h2>
         <div id="flex-btn">
        <button type="submit">Se connecter</button> 
        
        <router-link to="/">
          <button>Retour</button>   
        </router-link>
        </div>
      </form>
    </main>
  <FooterPage />
</template>

<script>
import FooterPage from "../components/footer.vue";
import router from "@/router";

export default {
  name: "LoginPage",
  components: {
    FooterPage
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
        )      
      })

      .then(function (res) { 
        
        if (res.ok) { 
          return res.json(); 
        }
        else {
          throw new Error();
      }})

      .then(function (value) {
        localStorage.setItem("user-token", value.token);
        localStorage.setItem("user-id", value.userId);
        router.push('/posts'); 
      })
      
      .catch(function () {
          const message = document.getElementById("errorLogin");
          message.innerHTML = "Vos identifiants ne sont pas corrects";
          message.style.color = "red";
      })
    }
  }
}

</script>

<style scoped lang="scss">

/* variable */

$color-primary: #4e5166;
$color-secondary: #fd2d01;
$color-tertiary: white;

#email,
#password {
  width: 400px;
  height: 30px;
  margin-bottom: 20px;
}


#flex-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border-bottom: $color-secondary;
}

button {
  background: $color-tertiary;
  color: $color-primary;
  font-size: 1em;
  width: 130px;
  height: 40px;
  transform: scale(1);
  border-radius: 20px;
  border: 2px solid $color-primary;
  margin-bottom: 200px;

  &:hover {
    transform: scale(1.15);
  }
}
@media screen and (max-width: 768px) {
 
  #email,
  #password {
    width: 90%;
  }
}
</style>