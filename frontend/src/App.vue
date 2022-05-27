<template>
  <nav>
    <!-- se charge de la navigation dans l'application -->
    <router-link to="/"></router-link>
  </nav>

  <!-- où afficher le composant auquel est associé la route qd on visite une url -->

  <router-view />
</template>

<script>
//import LogoHeader from "../components/logo.vue";
</script>

<style lang="scss">
#body {
  background-color: rgb(165, 165, 179);
}

#app {
  font-family: Lato, sans-serif;
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
  border-bottom: 4px solid #fd2d01;
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
