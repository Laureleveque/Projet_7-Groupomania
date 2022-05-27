<!-- composant Profil -->

<template>
  <body>
    <header>
      <LogoHeader />
      <NavigationPage />
    </header>

    <!--   inscription: création du profil  -->

    <div id="profil">
      <div id="photo">
        <img v-bind:src="images" alt="" />
      </div>
      <br />
      <div id="pseudo">Mon pseudo :</div>
      <br />
      <div>
        <label for="secteur">
          Secteur d'activité : ( RH, Gestion, Informatique,...) : </label
        ><br />
        <input type="secteur" v-model="secteur" id="secteur" />
      </div>
      <div>
        <label for="ville"> Ville : </label><br />
        <input type="ville" v-model="ville" id="ville" />
      </div>
      <br />
      <div>
        <label for="interets"> Intérêts : </label><br />
        <input type="interets" v-model="interets" id="interets" />
      </div>

      <div>
        <label for="sports"> Sports : </label><br />
        <input type="sports" v-model="sports" id="sports" />
      </div>

      <!--  création du profil si inscription -->

      <router-link to="/creation_profil">
        <button type="submit">Créer mon profil</button>
      </router-link>

      <!-- msg : votre profil est créé -->
    </div>

    <!--   suppression du compte  -->

    <router-link to="/profil">
      <!-- msg : votre compte est supprimé -->
      <input type="submit" value="Supprimer mon profil" />
    </router-link>

    <!--  connection : modification du profil  

      <div class="button2">
        <router-link to="/profil"> msg : votre profil est modifié 
          <input type="submit" value="Modifier mon profil" />
        </router-link>
      </div>
      -->
  </body>
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";

//import router from '../router/index.js';

export default {
  name: "ProfilPage",

  components: {
    LogoHeader,
    NavigationPage,
  },

  data() {
    return {
      image: "./assets/images/",
      username: "",
      nom: "",
      prenom: "",
      ville: "",
      info: [],
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
body {
  background-color: rgb(165, 165, 179);
}

#profil {
  border: 2px solid transparent;
  width: 900px;
  height: 1000px;
  background-color: white;
  margin: 40px auto;
  color: rgb(29, 29, 58);
}

#photo {
  border: 2px solid rgb(29, 29, 58);
  border-radius: 50%;

  padding: 30px 30px;
  width: 50px;
  height: 50px;
  margin: 30px auto;
}

#pseudo {
  font-size: 25px;
  font-weight: 600;
  color: rgb(29, 29, 58);
  text-align: left;
  margin: 20px 40px 80px 40px;
  border-bottom: 4px solid #fd2d01;
  padding-bottom: 20px;
}

img {
  width: 30%;
  margin: 40px;
  padding: 15px;
}

#secteur {
  width: 500px;
  height: 30px;
  margin-bottom: 20px;
}

#ville {
  width: 500px;
  height: 30px;
  margin-bottom: 20px;
}

#interets {
  width: 500px;
  height: 100px;
  margin-bottom: 20px;
}

#sports {
  width: 500px;
  height: 100px;
  margin-bottom: 20px;
}

button {
  background: rgb(165, 165, 179);
  color: white;
  font-size: 1em;
  font-weight: bold;
  width: 200px;
  height: 40px;
  transform: scale(1);
  border-radius: 20px;
  border: 2px solid rgb(165, 165, 179);
  margin-top: 40px;
}
button:hover {
  transform: scale(1.15);
}

@media screen and (max-width: 768px) {
  h1 {
    font-weight: 300;
  }

  #profil {
    width: 90%;
    padding-left: 10px;
    padding-right: 10px;
  }

  #pseudo,
  #secteur,
  #ville,
  #interets,
  #sports {
    width: 90%;
  }
}
</style>
