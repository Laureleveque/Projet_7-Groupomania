<!-- composant Forum  -->

<template>
  <header>
    <LogoHeader />
    <NavigationPage />
  </header>

  <div id="forum">
    <div class="utilisateur">
      <div id="photo">
        <img v-bind:src="images" alt="" />
      </div>
      <div class="nom">Laurence</div>
      <div class="post">
        <p>{{ msg }}</p>
      </div>
    </div>
    <div class="utilisateur">
      <div id="photo">
        <img v-bind:src="images" alt="" />
      </div>
      <div class="nom">Thibault</div>
      <div class="post">
        <p>{{ msg }}</p>
      </div>
    </div>
    <div class="utilisateur">
      <div id="photo">
        <img v-bind:src="images" alt="" />
      </div>
      <div class="nom">Mélanie</div>

      <div class="post">
        <p>{{ msg }}</p>
      </div>
    </div>
    <div class="utilisateur">
      <div id="photo">
        <img v-bind:src="images" alt="" />
      </div>
      <div class="nom">Tiago</div>
      <div class="post">
        <p>{{ msg }}</p>
      </div>
    </div>
    <div class="utilisateur">
      <div id="photo">
        <img v-bind:src="images" alt="" />
      </div>
      <div class="nom">Quentin</div>
      <div class="post">
        <p>{{ msg }}</p>
      </div>
    </div>
    <div class="utilisateur">
      <div id="photo">
        <img v-bind:src="images" alt="" />
      </div>
      <div class="nom">Alice</div>
      <div class="post">
        <p>{{ msg }}</p>
      </div>
    </div>
    <form>
      <div></div>
    </form>
  </div>
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";

export default {
  name: "AccueilPage",

  components: {
    LogoHeader,
    NavigationPage,
  },

  data() {
    return {
      commentaire: "",
    };
  },
};

/*
    methods: {
        
  getOnePost() // récupérer un post
        
  createPost()  // créer un post    
        
  deletePost() // supprimer un post (uniquement le créateur ou le modérateur)
}
*/
</script>

<style>
#forum {
  border: 2px solid transparent;
  width: 95%;
  background-color: white;
  margin: 20px auto;
  color: rgb(29, 29, 58);
}

.nom {
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  padding-left: 30px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 3px solid #4e5166;
}

#photo {
  border-radius: 50%;
  padding: 30px 30px;
  width: 40px;
  height: 40px;
  margin-left: 20px;
  margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 300;
  }

  #forum {
    width: 95%;
  }
  #message {
    width: 90%;
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
