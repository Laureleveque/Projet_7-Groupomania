<!-- composant page accueil du réseau  -->

<template>
  <h1>Bienvenue sur le réseau social de Groupomania</h1>

  <div>
    <img
      src="../assets/images/network-social-social-network-technology-mobile-phone-smartphone-keyboard-app-internet.jpg"
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
export default {
  name: "ReseauPage",
};
</script>

<style scoped lang="scss">
/* variables */

$color-primary: #4e5166;
$color-secondary: #fd2d01;
$color-tertiary: white;

body {
  background-color: $color-primary;
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
  color: $color-tertiary;
  font-size: 20px;
  text-decoration: none;
  :hover {
    border-bottom: 3px solid $color-secondary;
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
