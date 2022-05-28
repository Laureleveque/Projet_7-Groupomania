<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <LogoHeader />
  </div>
</template>

<script>
import LogoHeader from "@/components/logo.vue";

export default {
  name: "HomeView",
  components: {
    LogoHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Lato, Arial, Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
