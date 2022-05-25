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
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

.nav-bar {
  text-align: left;
  margin-left: 60px;
  margin-bottom: 40px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
}

nav {
  font-weight: bold;
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

.button {
  margin: 30px;
  border-radius: 5px;
  font-size: 18px;
  width: 160px;
  height: 60px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.product-display {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.product-image,
.product-info {
  width: 50%;
}

@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }

  .product-image,
  .product-info {
    margin-left: 10px;
    width: 100%;
  }

  .review-form {
    width: 90%;
  }
}
</style>
