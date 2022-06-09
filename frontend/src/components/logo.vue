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
  text-align: center;
}

img {
  margin-bottom: 0px;
  padding-bottom: 0px;

  width: 30%;
  margin: 40px;
  padding: 15px;
}

@media screen and (max-width: 768px) {
  #logo {
  }
}
</style>
