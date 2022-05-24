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
  <hr />
  <ProfilPage />
  <hr />
  <ForumPage />
  <hr />
  <MediaPage />
  <hr />
  <PostPage />
</template>

<!-- importation des composants -->
<script>
import LogoHeader from "./components/logo.vue";
import AccueilPage from "./components/accueil.vue";
import LoginPage from "./components/login.vue";
import SignupPage from "./components/signup.vue";
import LogoutPage from "./components/logout.vue";
import NavigationPage from "./components/navigation.vue";
import ProfilPage from "./components/profil.vue";
import ForumPage from "./components/forum.vue";
import PostPage from "./components/post.vue";
import MediaPage from "./components/media.vue";

// exportation de l'App avec les composants
export default {
  name: "App",
  components: {
    LogoHeader,
    AccueilPage,
    LoginPage,
    SignupPage,
    LogoutPage,
    NavigationPage,
    ProfilPage,
    ForumPage,
    PostPage,
    MediaPage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Arial, Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
