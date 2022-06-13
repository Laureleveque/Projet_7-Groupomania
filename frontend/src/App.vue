<!--  composant principal  -->

<template>
  <nav>
    <!-- se charge de la navigation dans l'application -->
    <router-link to="/"></router-link>
  </nav>

  <!-- où afficher le composant auquel est associé la route qd on visite une url -->

  <router-view />
</template>

<script></script>

<style lang="scss">
body {
  background-color: #4e5166;
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
  font-size: 1.5em;
  font-weight: 400;
  color: white;
  margin-top: 100px;
  margin-bottom: 80px;
  margin-left: 20px;
  border-bottom: 4px solid #fd2d01;
  padding-bottom: 20px;
  text-align: left;
}
h2 {
  font-size: 20px;
  color: white;
}
p {
  color: white;
}
</style>
