<!-- Component signup -->

<template>
  <h1>Inscription au réseau social de Groupomania</h1>

  <form>
    <div>
      <label for="username">Nom d'utilisateur : </label>
      <input type="text" v-model="username" id="username" required />
    </div>
    <div>
      <label for="email">Email : </label>
      <input type="email" v-model="email" id="email" required />
    </div>

    <div>
      <label for="password">Mot de passe : </label>
      <input type="password" v-model="password" id="password" required />
    </div>

    <div class="button">
      <input type="submit" value="S'inscrire" />
    </div>
  </form>
</template>

<script>
export default {
  name: "SignupPage",

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
}

#username {
  width: 200px;
  margin-bottom: 20px;
}

#email {
  width: 200px;
  margin-bottom: 20px;
  padding-left: 80px;
}

#password {
  width: 200px;
  margin-bottom: 20px;
  padding-left: 30px;
}

.button {
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 30px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 300;
  }
}
</style>
