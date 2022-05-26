<template>
  <nav>
    <!-- se charge de la navigation dans l'application -->
    <router-link to="/accueil"></router-link>
  </nav>

  <!-- où afficher le composant auquel est associé la route qd on visite une url -->

  <router-view />
</template>

<script>
//import LogoHeader from "../components/logo.vue";
</script>

<style lang="scss">
#body {
  background-color: rgb(29, 29, 58);
}

#app {
  font-family: sans-serif, Raleway, Arial, Avenir, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
h1 {
  text-align: left;
  font-weight: 400;
  color: white;
  margin-bottom: 70px;

  margin-left: 50px;
  margin-right: 50px;
  border-bottom: 4px solid rgba(255, 110, 110, 1);
  padding-bottom: 20px;
}

h2 {
  font-size: 20px;
  color: white;
}

p {
  color: white;
}
</style>
