<!-- Component login -->

<template>
  <h1>Connexion au réseau social de Groupomania</h1>

  <form>
    <div>
      <label for="email">Email :</label>
      <input type="email" name="email" id="email" required />
    </div>

    <div>
      <label for="password">Mot de passe :</label>
      <input type="password" name="password" id="password" required />
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
  text-align: center;
  font-weight: 400;
}

#email {
  margin: 20px auto;
}

#password {
  margin-bottom: 20px;
}

.button {
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
