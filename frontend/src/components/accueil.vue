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
    <a href="#">S'inscrire</a>
    <a href="#">Se connecter</a>
  </nav>
</template>

<script>
export default {
  name: "AccueilPage",
};
</script>

<style scoped lang="scss">
h1 {
  font-weight: 600;
  color: #4b4bba;
}

img {
  width: 300px;
  height: 250px;
  margin: 10px auto;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
  transform: scale(1);
  list-style-type: none;
  font-weight: bold;
  a {
    color: #4b4bba;
    font-size: 20px;
    text-decoration: none;
  }
  a:hover {
    padding: 30px auto;
    color: #4b4bba;
    text-decoration: underline;
    transform: scale(1.15);
  }
}

/*   barre de navigation en responsive  */

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 300;
  }
  nav {
    width: 100%;
    justify-content: space-around;
  }

  nav a {
    width: 50%;
    padding: 30px auto;
    text-align: center;
  }
}
</style>
