<!-- component accueil -->

<template>
  <h1>Bienvenue sur le réseau social de Groupomania</h1>

  <div>
    <img
      src="../assets/images/mobile-phone-g2c3fa4a3d_640.jpg"
      alt="photo reseau social"
    />
  </div>

  <nav>
    <a href="">S'inscrire</a>
    <a href="">Se connecter</a>
  </nav>
</template>

<script>
export default {
  name: "AccueilPage",
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-weight: 400;
}

img {
  width: 300px;
  height: 300px;
  margin: 10px auto;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
}

nav a {
  padding: 30px auto;
  font-size: 18px;
}

/*   barre de navigation en responsive  */

@media screen and (max-width: 768px) {
  nav {
    width: 100%;
    justify-content: center;
  }

  nav a {
    width: 50%;
    padding: 30px auto;
    text-align: center;
  }
}
</style>
