<!-- Composant Logout -->

<template>
  <header>
    <LogoHeader />
  </header>
  <div id="deconnection">
    <h1>Vous êtes bien déconnecté(e) !</h1>
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
    font-weight: 600;
    font-size: 20px;
  }
}
</style>
