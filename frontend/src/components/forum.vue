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

<style>
h1 {
  font-weight: 600;
}

#post {
  border: 2px solid black;
  width: 600px;
  height: 200px;
  margin: 30px auto;
}
</style>
