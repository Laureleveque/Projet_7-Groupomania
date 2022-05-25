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

<style>
p {
  font-size: 22px;
}

.review-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  border: 2px solid #d8d8d8;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.review-container {
  width: 425px;
  padding: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
  margin-left: 40px;
  border: 2px solid #d8d8d8;
}

.review-container li {
  margin-bottom: 30px;
}

.review-form .button {
  display: block;
  margin: 30px auto;
}

select {
  height: 40px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
}

textarea {
  width: 95%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
