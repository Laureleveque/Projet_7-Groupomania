<!-- Composant Deleteok -->

<template>
  <body>
    <header>
      <LogoHeader />
    </header>
    <div>
      <h1>Votre compte est supprimé !</h1>
    </div>
  </body>
</template>

<script>
import LogoHeader from "../components/logo.vue";

export default {
  name: "DeletePage",

  components: {
    LogoHeader,
  },
};
</script>

<style></style>
