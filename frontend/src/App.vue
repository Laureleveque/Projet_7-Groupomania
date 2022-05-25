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
#app {
  font-family: Arial, Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  text-align: center;
}
</style>
