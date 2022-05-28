<!-- Composant Deleteok -->

<template>
  <header>
    <LogoHeader />
  </header>
  <div id="delete">
    <h1>Votre compte est supprimé !</h1>
  </div>
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

<style>
@media screen and (max-width: 768px) {
  p {
    font-weight: 600;
    font-size: 20px;
  }
}
</style>
