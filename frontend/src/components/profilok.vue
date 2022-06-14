<!--  composant profil ok  -->

<template>
  <body>
    <header>
      <LogoHeader />
      <NavigationPage />
    </header>
    <div>
      <h1>Votre profil est modifié !</h1>
    </div>
  </body>
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";

export default {
  name: "ProfilokPage",

  components: {
    LogoHeader,
    NavigationPage,
  },
};
</script>

<style scoped lang="scss"></style>
