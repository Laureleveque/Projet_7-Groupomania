<!-- Component login -->

<template>
  <h1>Connexion au réseau social de Groupomania</h1>

  <form>
    <div>
      <label for="email">Email : </label>
      <input type="email" v-model="email" id="email" required />
    </div>

    <div>
      <label for="password"> Mot de passe : </label>
      <input type="password" v-model="password" id="password" required />
    </div>

    <div class="button">
      <input type="submit" value="Se connecter" />
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginPage",

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
}

#email {
  width: 200px;
  margin-bottom: 20px;
  padding-left: 60px;
}

#password {
  width: 200px;
  margin-bottom: 20px;
}

.button {
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 30px;
}
a :hover {
  background-color: #4b4bba;
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 300;
  }
}
</style>
