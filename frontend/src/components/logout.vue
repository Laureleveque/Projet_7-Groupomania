<!-- Composant Logout -->

<template>
  <h1>Vous êtes bien déconnectés !</h1>
</template>

<script>
export default {
  name: "LogoutPage",
};
</script>

<style>
h1 {
  font-weight: 600;
  color: #4b4bba;
  margin-top: 60px;
  margin-bottom: 60px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 300;
  }
}
</style>
