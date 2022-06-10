<!-- Composant Profilok -->

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

<style scoped lang="scss">
body {
  background: #4e5166;
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 600;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: left;
  }
}
</style>
