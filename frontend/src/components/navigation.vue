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
  list-style-type: none;
  font-weight: bold;
  transform: scale(1);
}

a {
  color: #4b4bba;
  font-size: 20px;
  text-decoration: none;
}

a:hover {
  padding: 60px auto;
  text-decoration: underline;
  transform: scale(1.15);
}

/*   barre de navigation en responsive  */

@media screen and (max-width: 768px) {
  nav {
    width: 100%;
    padding-left: 0px;
    justify-content: center;
  }
}
</style>
