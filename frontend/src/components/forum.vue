<!-- composant Forum  -->

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
  name: "ForumPage",

  components: {
    LogoHeader,
    NavigationPage,
  },
};

/* methods

getAllPosts

*/
</script>

<style></style>
