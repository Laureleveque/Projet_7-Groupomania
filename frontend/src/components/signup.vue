<!-- composant Signup -->

<template>
  <body>
    <header>
      <LogoHeader />
    </header>

    <h1>Inscription au réseau social de Groupomania</h1>

    <form>
      <div>
        <label for="email">Email :</label><br />
        <input type="email" v-model="email" id="email" required />
      </div>

      <div>
        <label for="password">Mot de passe :</label><br />
        <input type="password" v-model="password" id="password" required />
      </div>

      <router-link to="/profil">
        <button v-on:click="signup()" type="submit">S'inscrire</button>
      </router-link>
    </form>
  </body>
</template>

<script>
import LogoHeader from "../components/logo.vue";
const axios = require("axios").default;

//import router from '../router/index.js';

export default {
  name: "SignupPage",
  components: {
    LogoHeader,
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    signup() {
      axios
        .post(`http://127.0.0.1:3000/api/user/signup`, {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          this.errorMessage = error;
        });
    },
  },
};
</script>

<style scoped lang="scss">
//@import "./scss/variables.sass";

body {
  background-color: #4e5166;
  margin: 0px;
}

#email {
  width: 400px;
  height: 30px;
  margin-bottom: 20px;
}

#password {
  width: 400px;
  height: 30px;
  margin-bottom: 20px;
}

button {
  background: white;
  color: #4e5166;
  font-size: 1em;
  transform: scale(1);
  font-weight: bold;
  width: 110px;
  height: 40px;
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
