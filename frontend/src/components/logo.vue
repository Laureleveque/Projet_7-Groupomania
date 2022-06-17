<!--  composant logo  -->

<template>
  <header>
    <div id="logo">
      <img
        src="../assets/images/icon-left-font-monochrome-white.svg"
        alt="Logo de Groupomania"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "LogoHeader",
};
</script>

<style scoped lang="scss">
#logo {
  margin: 80px auto 30px auto;
}

@media screen and (max-width: 768px) {
  img {
    width: 60%;
  }
}
</style>
