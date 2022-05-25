<!-- composant Accueil -->

<template>
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
</template>

<script>
import LogoHeader from "../components/logo.vue";

export default {
  name: "AccueilPage",
  components: {
    LogoHeader,
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-weight: 600;
  color: #4b4bba;
  text-align: center;
}

h2 {
  font-size: 25px;
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
  transform: scale(1);
  text-decoration: underline;
  font-weight: bold;
  a {
    color: #4b4bba;
    font-size: 20px;
  }
  a:hover {
    padding: 30px auto;
    color: #4b4bba;
    transform: scale(1.15);
  }
}

/*   barre de navigation en responsive  */

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 600;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
  }

  h2 {
    font-size: 20px;
  }

  img {
    width: 200px;
    height: 200px;
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  nav a {
    width: 50%;
    padding: 30px auto;
    text-align: center;
  }
}
</style>
