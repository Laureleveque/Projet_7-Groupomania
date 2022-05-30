<!-- composant Login -->

<template>
  <body>
    <header>
      <LogoHeader />
    </header>

    <h1>Connexion au réseau social de Groupomania</h1>

    <form>
      <div>
        <label for="email">Email : </label><br />
        <input type="email" v-model="email" id="email" required />
      </div>

      <div>
        <label for="password"> Mot de passe : </label><br />
        <input type="password" v-model="password" id="password" required />
      </div>

      <button type="submit">Se connecter</button>
    </form>
  </body>
</template>

<script>
import LogoHeader from "../components/logo.vue";
const axios = require("axios").default;

export default {
  name: "LoginPage",
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
    login() {
      axios
        .post(`http://127.0.0.1:3000/api/user/login`, {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          document.location = "/#/accueil";
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
