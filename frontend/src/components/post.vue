<!-- composant Post -->

<template>
  <header>
    <LogoHeader />
    <NavigationPage />
  </header>

  <div class="post">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  props: {
    msg: String,
  },

  data() {
    return {
      commentaire: "",
    };
  },
  /*
    methods: {
        
  getOnePost() // récupérer un post
        
  createPost()  // créer un post    
        
  deletePost() // supprimer un post (uniquement le créateur ou le modérateur)
}
*/
};
</script>

<style></style>
