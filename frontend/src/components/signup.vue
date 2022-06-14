<template>
  <body>
    <header>
      <LogoHeader />
    </header>

    <h1>Inscription au réseau social de Groupomania</h1>

    <main>
      <form @submit="checkForm" method="post">
        <div>
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
<br />
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
<h2></h2>
        <button type="submit">S'inscrire</button>
       
      </form>
      
    </main>
  </body>
</template>

<script>
import router from "@/router";
import LogoHeader from "../components/logo.vue";

export default {
  name: "SignupPage",
  components: {
    LogoHeader,
  },

  data() {
    return {
      errors: [],
      email: "",
      pseudo: "",
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
        this.signup(); // envoi des données
      }
      e.preventDefault();
    },

// envoi requête post pour inscription

    signup() {
      fetch("http://localhost:3000/api/user/signup", {

        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },

        body: JSON.stringify( // transformation en JSON
          {
            email: this.email,
            pseudo: this.pseudo,
            password: this.password
          }
        )        
      })

      .then(function (res) { 
      
        if (res.ok) { 
          return res.json();  
        }
        else {
        const message = document.createElement("h2");
        message.innerHTML = "Email déja utilisé";
        message.style.color = "red";
        parent.appendChild(message);
      }})

      .then(function (value) {  
        localStorage.setItem("user-token", value.token);
        localStorage.setItem("user-id", value.userId);
        router.push('/signupok'); 
      })

      .catch(function (err) {
        console.error(err);
      })
    }
  }
}

</script>
<style scoped lang="scss">


/* variables */

$color-primary: #4e5166;
$color-secondary: #fd2d01;

#email,
#pseudo,
#password {
  width: 400px;
  height: 30px;
  margin-bottom: 20px;
}

button {
  background: white;
  color: $color-primary;
  font-size: 1em;
  transform: scale(1);
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: 2px solid $color-primary;
  margin-bottom: 100px;

  &:hover {
    transform: scale(1.15);
  }
}

@media screen and (max-width: 768px) {
  
  #email,
  #pseudo,
  #password {
    width: 90%;
  }
}
</style>
