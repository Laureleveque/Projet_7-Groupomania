<template>
  <body>
    <header>
      <LogoHeader />
      <NavigationPage />
    </header>
    <div>
      <h1>Votre compte est créé !</h1>
    </div>
  </body>
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

<style scoped lang="scss"></style>
