<!-- composant Profil -->

<template>
  <header>
    <LogoHeader />
    <NavigationPage />
  </header>

  <div id="profil">
    <div class="nav-bar">
      <ul>
        <li>
          <router-link to="/">
            <a href="">Créer mon profil</a>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <a href="">Modifier mon profil</a>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <a href="">Supprimer mon profil</a>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image" alt="" />
        </div>
        <div class="product-info">
          <p class="username">{{}}</p>
          <p class="nom">{{}}</p>
          <p class="prénom">{{}}</p>
          <p class="ville">{{}}</p>
          <p class="secteur">{{}}</p>
        </div>
      </div>
    </div>
  </div>
  <!--
  <div class="button">
    <input type="submit" value="profil" />
  </div>
  -->
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";

export default {
  name: "ProfilPage",

  components: {
    LogoHeader,
    NavigationPage,
  },

  data() {
    return {
      id: "",
      image: "./assets/image/photo_profil",
      username: "",
      nom: "",
      prenom: "",
      ville: "",
      info: [],
      secteur: "",
    };
  },
};
/*
methods: {
    
  createProfil()  // créer un profil    

  getOneProfil() // récupérer un profil
                
  updateProfil() // modifier un profil
                
	deleteprofil() // supprimer un profil soit le compte

 }
*/
</script>

<style>
img {
  width: 40%;
  margin: 40px;
  padding: 15px;
}

ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
}

a {
  color: #4b4bba;
  font-size: 15px;
  text-decoration: none;
}

a:hover {
  padding: 60px auto;
  text-decoration: underline;
}
</style>
