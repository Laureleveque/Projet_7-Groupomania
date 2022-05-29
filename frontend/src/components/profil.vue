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

      <div>
        <h3>Nom d'utilisateur : {{}}</h3>
        <input type="text" v-model="pseudo" class="cadre" required />
      </div>

      <br />
      <div>
        <h3>Secteur d'activité : ( RH, Gestion, Informatique,...) : {{}}</h3>
        <input type="text" v-model="secteur" class="cadre" />
      </div>

      <br />
      <div>
        <h3>Ville : {{}}</h3>
        <input type="text" v-model="ville" class="cadre" />
      </div>

      <br />
      <div>
        <h3>Intérêts : {{}}</h3>
        <input type="text" v-model="interets" class="cadre" />
      </div>

      <br />
      <div>
        <h3>Sports : {{}}</h3>
        <input type="text" v-model="sports" class="cadre" />
      </div>

      <!--  création du profil si inscription -->

      <router-link to="/accueil">
        <button v-on:click="createProfil()" type="submit">
          Créer mon profil
        </button>
      </router-link>

      <!--  bouton modification du profil si déja inscrit 
      
        <router-link to="/accueil">
          <button v-on:click="modifyProfil()" type="submit">
            Modifier mon profil
          </button>
        </router-link>
      -->
    </div>
    <!--   suppression du compte  -->

    <router-link to="/delete">
      <p v-on:click="deleteProfil()">Supprimer mon compte</p>
    </router-link>
  </body>
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";
const axios = require("axios").default;

//import router from '../router/index.js';

export default {
  name: "ProfilPage",

  components: {
    LogoHeader,
    NavigationPage,
  },

  data() {
    return {
      pseudo: "",
      //photo: "./assets/images/",
      secteur: "",
      ville: "",
      interets: "",
      sports: "",
    };
  },
  methods: {
    // création du profil

    createProfil() {
      axios
        .post(`http://127.0.0.1:3000/api/profil/`, {
          pseudo: this.pseudo,
          photo: this.photo,
          secteur: this.secteur,
          ville: this.ville,
          interets: this.interets,
          sports: this.sports,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          this.errorMessage = error;
        });
    },

    // suppression du compte

    deleteProfil() {
      axios
        .delete(`http://127.0.0.1:3000/api/user/delete`, {
          pseudo: this.pseudo,
          image: this.image,
          secteur: this.secteur,
          ville: this.ville,
          interets: this.interets,
          sports: this.sports,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          this.errorMessage = error;
        });
    },
  },
};
/*
  // modifier le profil

  modifyProfil() {
   axios.put (`/update`, {
      "pseudo":this.pseudo,
      "image":this.image,
      "secteur":this.secteur,
      "ville":this.ville,
      "interets":this.interets,
      "sports":this.sports,
}
  .then((res) => {
         console.log(res);
      })
  .catch((error) => {
        this.errorMessage = error;
      })
  )};

  */
</script>

<style>
body {
  background-color: #4e5166;
}

#profil {
  border: 2px solid transparent;
  width: 900px;
  height: 1000px;
  background-color: white;
  margin: 40px auto;
  color: rgb(29, 29, 58);
}

.cadre {
  width: 600px;
  height: 30px;
  margin-bottom: 20px;
  border: 2px solid #737fe0;
}

img {
  width: 30%;
  margin: 40px;
  padding: 15px;
}

#photo {
  border: 2px solid #737fe0;
  border-radius: 50%;
  padding: 30px 30px;
  width: 50px;
  height: 50px;
  margin: 30px auto;
}

button {
  background: #4e5166;
  color: white;
  font-size: 1em;
  font-weight: bold;
  width: 200px;
  height: 40px;
  transform: scale(1);
  border-radius: 20px;
  border: 2px solid #4e5166;
  margin-top: 40px;
}

button:hover {
  transform: scale(1.15);
}

p {
  color: #ffd7d7;
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

  img {
    width: 60%;
  }
  .cadre {
    width: 90%;
  }
}
</style>
