<!-- Composant Logout -->

<template>
  <header>
    <LogoHeader />
  </header>
  <div id="deconnection">
    <h1>Vous êtes bien déconnectés !</h1>
  </div>
</template>

<script>
import LogoHeader from "../components/logo.vue";

export default {
  name: "LogoutPage",
  components: {
    LogoHeader,
  },
};
</script>

<style>
@media screen and (max-width: 768px) {
  h1 {
    font-weight: 300;
  }
}
</style>
