<!-- composant Signup -->

<template>
  <header>
    <LogoHeader />
  </header>

  <h1>Inscription au réseau social de Groupomania</h1>

  <form>
    <div>
      <label for="username">Nom d'utilisateur</label><br />
      <input type="text" v-model="username" id="username" required />
    </div>
    <div>
      <label for="email">Email</label><br />
      <input type="email" v-model="email" id="email" required />
    </div>

    <div>
      <label for="password">Mot de passe</label><br />
      <input type="password" v-model="password" id="password" required />
    </div>

    <div class="button">
      <router-link to="/profil">
        <input type="submit" value="S'inscrire" />
      </router-link>
    </div>
  </form>
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
      username: "",
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

#username {
  width: 400px;
  margin-bottom: 20px;
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
  margin: 20px auto;
  background-color: transparent;
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 300;
  }
}
</style>
