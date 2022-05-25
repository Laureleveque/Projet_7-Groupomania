<!-- composant Login -->

<template>
  <header>
    <LogoHeader />
  </header>

  <h1>Connexion au réseau social de Groupomania</h1>

  <form>
    <div>
      <label for="email">Email</label><br />
      <input type="email" v-model="email" id="email" required />
    </div>

    <div>
      <label for="password"> Mot de passe</label><br />
      <input type="password" v-model="password" id="password" required />
    </div>

    <div class="button" @click="login">
      <router-link to="/profil">
        <input type="submit" value="Se connecter" />
      </router-link>
    </div>
  </form>
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
h1 {
  font-weight: 600;
  color: #4b4bba;
  text-align: center;
}

#email {
  width: 400px;
  margin-bottom: 20px;
}

#password {
  width: 400px;
  margin-bottom: 20px;
}

.button {
  cursor: pointer;
  padding: 0px;
  margin: 20px auto;
  background-color: transparent;
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 300;
  }
}
</style>
