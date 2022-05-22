<!-- component navigation -->

<template>
  <nav id="navigation">
    <ul>
      <li>
        <a href="">Mon profil</a>
      </li>
      <li>
        <a href="">Forum</a>
      </li>
      <li>
        <a href="">Medias</a>
      </li>
      <li>
        <a href="">Déconnexion</a>
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
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
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
