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

      <div class="button" @click="login">
        <router-link to="/profil">
          <input type="submit" value="Se connecter" />
        </router-link>
      </div>
    </form>
  </body>
</template>

<script>
import LogoHeader from "../components/logo.vue";

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
};
</script>

<style scoped lang="scss">
body {
  background-color: rgb(29, 29, 58);
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

.button {
  cursor: pointer;
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
