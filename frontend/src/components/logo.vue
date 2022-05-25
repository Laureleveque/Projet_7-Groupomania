<!-- composant Logo -->

<template>
  <div id="logo">
    <img
      src="../assets/images/icon-left-font-monochrome-black.svg"
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
img {
  margin-top: 10px;
}
@media screen and (max-width: 768px) {
  img {
    width: 70%;
  }
}
</style>
