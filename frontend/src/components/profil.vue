<!-- composant Profil -->

<template>
  <body>
    <header>
      <LogoHeader />
      <NavigationPage />
    </header>

    <!--   inscription: création du profil  -->

    <main>
      <form @submit="checkProfil" method="post">
        <div class="profil">
          <div id="photo">
            <!--<img :src="user - photo" />-->
          </div>
          <br />
          <div>
            <p>{{ pseudo }}</p>
          </div>
          <br />

          <div class="profil">
            <label for="interets">Intérêts : </label><br />
            <textarea
              name="interets"
              id="interets"
              v-model="interets"
            ></textarea>
          </div>

          <!--<button type="submit" v-on:click="checkProfil()">-->
          <button type="submit">Enregistrer mon profil</button>
          <br />
          <!--<button type="submit" v-on:click="deleteProfil()">-->
          <button type="submit">Supprimer mon compte</button>
        </div>
        <br />
      </form>

      <!--  bouton modification du profil si déja inscrit 
          
          <button type="submit" @click.prevent="modifyProfil">
            Modifier mon profil
          </button>
       
      -->
    </main>
  </body>
</template>

<script>
//import { getTransitionRawChildren } from "vue";
import router from "@/router";
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
      userId: "",
      photo: "",
      pseudo: "",
      interets: "",
    };
  },

  methods: {
    // enregistrer un profil

    checkProfil(e) {
      e.preventDefault();

      this.profilUserId = localStorage.getItem("userId");

      this.userId = this.$route.params.userId;

      console.log(this.profilUserId);
      console.log(this.userId);

      this.getUserProfil(this.userId);
    },

    // récupérer un profil

    getUserProfil() {
      fetch("http://localhost:3000/api/profil/:id", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        /*body: JSON.stringify(
          // transformation en JSON
          {
            photo: this.photo,
            pseudo: this.pseudo,
            interets: this.interets,
          }
        ),*/
      })
        .then(function (res) {
          // réponse à la requête

          if (res.ok) {
            // vérification déroulement de la requête
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function () {
          router.push("/profil");
        })

        .catch(function (err) {
          console.error(err);
        });
    },

    // suppression du compte

    deleteProfil() {
      fetch("http://localhost:3000/api/profil/deleteProfil/:id", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(
          // transformation en JSON
          {
            photo: this.photo,
            pseudo: this.pseudo,
            interets: this.interets,
          }
        ),
      })
        .then(function (res) {
          if (res.ok) {
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function (res) {
          console.log(res);
          if (this.userId == this.profilUserId) {
            localStorage.clear();
            router.push("/delete");
          }
        })

        .catch(function (err) {
          console.error(err);
        });
    },
  },
};

/* modifier le profil

    modifyProfil() {
      fetch("http://localhost:3000/api/profil/modifyProfil/:id", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          photo: this.photo,
          pseudo: this.pseudo,
          interets: this.interets,
        }), // transformation en JSON
      })
        .then(function (res) {
          // réponse à la requête

          if (res.ok) {
            // vérification déroulement de la requête
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function () {
          document.location.href = "/#/profil";

        })

        .catch(function (err) {
          console.error(err);
         })

    };*/
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

textarea {
  font-family: lato;
}

button {
  background: #737fe0;
  color: white;
  font-size: 1em;
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
