<!-- composant Logo -->

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
  width: 90%;
  text-align: center;
}

img {
  margin-bottom: 0px;
  padding-bottom: 0px;
}

@media screen and (max-width: 768px) {
  img {
    width: 100%;
  }
}
</style>
