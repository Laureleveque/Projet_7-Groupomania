<!-- Composant Signupok -->

<template>
  <header>
    <LogoHeader />
    <NavigationPage />
  </header>
  <div id="connection">
    <h1>Votre compte est créé !</h1>
  </div>
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";

export default {
  name: "SignupokPage",

  components: {
    LogoHeader,
    NavigationPage,
  },
};
</script>

<style>
@media screen and (max-width: 768px) {
  p {
    font-weight: 600;
    font-size: 20px;
  }
}
</style>
