<!-- composant Media -->

<template>
  <header>
    <LogoHeader />
    <NavigationPage />
  </header>
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";

export default {
  name: "MediaPage",

  components: {
    LogoHeader,
    NavigationPage,
  },
};

/* methods
getOnePhoto
getAllPhotos
deletePhoto
*/
</script>

<style></style>
