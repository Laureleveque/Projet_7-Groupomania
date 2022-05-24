<!-- composant Forum  -->

<template>
  <div>
    <h1>Forum</h1>
    <div id="post"></div>
    <button>Envoyer</button>
  </div>
</template>

<script>
export default {
  name: "ForumPage",
};

/* methods

getAllPosts

*/
</script>

<style>
h1 {
  font-weight: 600;
}

#post {
  border: 2px solid black;
  width: 600px;
  height: 200px;
  margin: 30px auto;
}
</style>
