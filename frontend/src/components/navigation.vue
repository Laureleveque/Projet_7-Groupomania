<!-- composant Navigation -->

<template>
  <nav id="navigation">
    <ul>
      <li>
        <router-link to="/accueil">
          <a href="">Accueil</a>
        </router-link>
      </li>

      <li>
        <router-link to="/profil">
          <a href="">Votre profil</a>
        </router-link>
      </li>

      <li>
        <router-link to="/logout">
          <a href="">Déconnexion</a>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
//import router from '../router/index.js';

export default {
  name: "NavigationPage",
};
</script>

<style scoped lang="scss">
#navigation {
  margin-bottom: 50px;
}

ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
}

nav {
  font-weight: 600;
}

a {
  color: white;
  font-size: 20px;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  border-bottom: 3px solid #fd2d01;
  padding: 60px auto;
}

/*   barre de navigation en responsive  */

@media screen and (max-width: 768px) {
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0px;
    margin-top: 0px;
    padding-left: 15px;
  }

  a {
    font-size: 15px;
  }
}
</style>
