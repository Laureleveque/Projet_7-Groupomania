<!-- composant Accueil -->

<template>
  <body>
    <header>
      <LogoHeader />
    </header>

    <h1>Bienvenue sur le réseau social de Groupomania</h1>

    <div>
      <img
        src="../assets/images/mobile-phone-g2c3fa4a3d_640.jpg"
        alt="photo reseau social"
      />
    </div>

    <nav>
      <router-link to="/signup">
        <h2>S'inscrire</h2>
      </router-link>
      <router-link to="/login">
        <h2>Se connecter</h2>
      </router-link>
    </nav>
  </body>
</template>

<script>
import LogoHeader from "../components/logo.vue";

//import router from '../router/index.js';

export default {
  name: "ReseauPage",
  components: {
    LogoHeader,
  },
};
</script>

<style scoped lang="scss">
body {
  background-color: rgb(29, 29, 58);
  margin: 0px;
}

img {
  width: 250px;
  height: 250px;
  margin: 10px auto;
}

nav {
  height: 150px;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
}

a {
  color: white;
  font-size: 20px;
  text-decoration: none;
  :hover {
    border-bottom: 3px solid #fd2d01;
  }
}

/*   barre de navigation en responsive  */

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 600;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
  }

  h2 {
    font-size: 20px;
  }

  img {
    width: 150px;
    height: 150px;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
