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
        <input type="text" v-model="pseudo" id="pseudo" required />
      </div>

      <br />

      <div>
        <h3>Email : {{}}</h3>
        <input type="email" v-model="Email" id="email" />
      </div>

      <br />
      <div>
        <h3>Intérêts : {{}}</h3>
        <input type="text" v-model="interets" id="interets" />
      </div>

      <!--  création du profil si inscription -->

      <button v-on:click="createProfil" type="submit">Créer mon profil</button>

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
      email: "",
      interets: "",
    };
  },
  methods: {
    // création du profil

    createProfil() {
      axios
        .post(`http://127.0.0.1:3000/api/profil/:id`, {
          pseudo: this.pseudo,
          photo: this.photo,
          email: this.email,
          interets: this.interets,
        })
        .then((res) => {
          console.log(res);
          document.location = "/#/profil";
        })
        .catch((error) => {
          this.errorMessage = error;
        });
    },

    // suppression du compte

    deleteProfil() {
      axios
        .delete(`http://127.0.0.1:3000/api/profil/`, {
          pseudo: this.pseudo,
          photo: this.photo,
          email: this.email,
          interets: this.interets,
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
      "photo":this.photo,
      "email":this.email, 
      "interets":this.interets,     
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
  margin: 40px auto;
}

#pseudo,
#email,
#interets {
  width: 400px;
  height: 30px;
  margin-bottom: 20px;
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
  background: #737fe0;
  color: white;
  font-size: 1em;
  font-weight: bold;
  width: 200px;
  height: 50px;
  transform: scale(1);
  border-radius: 20px;
  border: 2px solid #737fe0;
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

  #pseudo,
  #email,
  #interets {
    width: 90%;
  }
  img {
    width: 60%;
  }
  .cadre {
    width: 90%;
  }
}
</style>
