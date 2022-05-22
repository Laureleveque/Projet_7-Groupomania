<!-- Component logout -->

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
  text-align: center;
  font-weight: 600;
  color: #4b4bba;
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 300;
  }
}
</style>
