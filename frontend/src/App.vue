<template>
  <!--    Tests   -->

  <LogoHeader />
  <hr />
  <AccueilPage />
  <hr />
  <LoginPage />
  <hr />
  <SignupPage />
  <hr />
  <LogoutPage />
  <hr />
  <NavigationPage />
</template>

<script>
import AccueilPage from "./components/accueil.vue";
import LogoHeader from "./components/logo.vue";
import LoginPage from "./components/login.vue";
import SignupPage from "./components/signup.vue";
import LogoutPage from "./components/logout.vue";
import NavigationPage from "./components/navigation.vue";

export default {
  name: "App",
  components: {
    AccueilPage,
    LogoHeader,
    LoginPage,
    SignupPage,
    LogoutPage,
    NavigationPage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
