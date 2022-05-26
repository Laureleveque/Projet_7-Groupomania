<!-- composant Navigation -->

<template>
  <nav id="navigation">
    <ul>
      <li>
        <router-link to="/profil">
          <a href="">Mon profil</a>
        </router-link>
      </li>
      <li>
        <router-link to="/forum">
          <a href="">Forum</a>
        </router-link>
      </li>
      <li>
        <router-link to="/media">
          <a href="">Medias</a>
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
export default {
  name: "NavigationPage",
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
}

nav {
  font-weight: 400;
}

a {
  color: white;
  font-size: 20px;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  border-bottom: 3px solid rgba(255, 110, 110, 1);
  padding: 60px auto;
}

/*   barre de navigation en responsive  */

@media screen and (max-width: 768px) {
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
