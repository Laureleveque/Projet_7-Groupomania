<!--  composant logo  -->

<template>
  <div id="logo">
    <img
      src="../assets/images/icon-left-font-monochrome-white.svg"
      alt="Logo de Groupomania"
    />
  </div>
</template>

<script>
export default {
  name: "LogoHeader",
};
</script>

<style>
#logo {
  margin: 80px auto 30px auto;
}

@media screen and (max-width: 768px) {
  img {
    width: 60%;
  }
}
</style>
