<!--  composant principal  -->

<template>
  <LogoHeader />

  <!-- où afficher le composant auquel est associé la route qd on visite une url -->
  <router-view />
</template>

<script>
import LogoHeader from "./components/logo.vue";

export default {
  components: {
    LogoHeader,
  },
};
</script>

<style lang="scss">
/* variables */

$color-primary: #4e5166;
$color-secondary: #fd2d01;
$color-tertiary: white;

body {
  background-color: $color-primary;
}
#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-tertiary;
}
h1 {
  text-align: left;
  font-size: 1.5em;
  font-weight: 400;
  color: $color-tertiary;
  margin-top: 100px;
  margin-bottom: 80px;
  margin-left: 20px;
  border-bottom: 4px solid $color-secondary;
  padding-bottom: 20px;
  text-align: left;
}
h2 {
  font-size: 20px;
  color: $color-tertiary;
}
p {
  color: $color-tertiary;
}
</style>
