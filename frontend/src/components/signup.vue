<!-- composant Signup -->

<template>
  <body>
    <header>
      <LogoHeader />
    </header>

    <h1>Inscription au réseau social de Groupomania</h1>

    <form>
      <div>
        <label for="username">Nom d'utilisateur :</label><br />
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="email">Email :</label><br />
        <input type="email" v-model="email" id="email" required />
      </div>

      <div>
        <label for="password">Mot de passe :</label><br />
        <input type="password" v-model="password" id="password" required />
      </div>

      <div class="button">
        <router-link to="/profil">
          <input type="submit" value="S'inscrire" />
        </router-link>
      </div>
    </form>
  </body>
</template>

<script>
import LogoHeader from "../components/logo.vue";

export default {
  name: "SignupPage",
  components: {
    LogoHeader,
  },

  data() {
    return {
      id: "",
      username: "",
      email: "",
      password: "",
    };
  },
};
</script>

<style scoped lang="scss">
body {
  background-color: rgb(29, 29, 58);
  margin: 0px;
}

#username {
  width: 400px;
  height: 30px;
  margin-bottom: 20px;
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

.button {
  cursor: pointer;
  margin: 40px auto;

  :hover {
    color: rgba(255, 110, 110, 1);
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 300;
  }
}
</style>
