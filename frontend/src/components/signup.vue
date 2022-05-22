<!-- Component signup -->

<template>
  <h1>Inscription au réseau social de Groupomania</h1>

  <form>
    <div>
      <label for="username">nom d'utilisateur : </label>
      <input type="text" name="username" id="username" required />
    </div>
    <div>
      <label for="email">Email : </label>
      <input type="email" name="email" id="email" required />
    </div>

    <div>
      <label for="password">Mot de passe : </label>
      <input type="password" name="password" id="password" required />
    </div>

    <div class="button">
      <input type="submit" value="Se connecter" />
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
  text-align: center;
  font-weight: 600;
  color: #4b4bba;
}

#username {
  margin-bottom: 20px;
}

#email {
  margin-bottom: 20px;
}

#password {
  margin-bottom: 20px;
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
