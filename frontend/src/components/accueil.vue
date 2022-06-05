<!-- composant Accueil  -->

<template>
  <header>
    <LogoHeader />
    <NavigationPage />
  </header>
  <main>
    <div id="forum">
      <div class="utilisateur">
        <div id="photo">
          <!-- <img v-bind:src="assets/images/" alt="" /> -->
        </div>

        <h2 class="pseudo">Thibault</h2>
      </div>

      <div class="post">
        <p>{{ msg }}</p>
      </div>
    </div>
  </main>
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
      post: "",
    };
  },

  methods: {
    // création d'un post

    createPost() {
      fetch("http://localhost:3000/api/post/createPost", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(
          // transformation en JSON
          {
            post: this.post,
          }
        ),
      })
        .then(function (res) {
          // réponse à la requête

          if (res.ok) {
            // vérification déroulement de la requête
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function () {
          document.location.href = "/#/acccueil";
        })

        .catch(function (err) {
          console.error(err);
        });
    },

    // récupérer les posts

    getAllPosts() {
      fetch("http://localhost:3000/api/post/getAllPosts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(
          // transformation en JSON
          {
            post: this.post,
          }
        ),
      })
        .then(function (res) {
          // réponse à la requête

          if (res.ok) {
            // vérification déroulement de la requête
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function () {
          // récupération de l'identifiant du profil
        })

        .catch(function (err) {
          console.error(err);
        });
    },

    // suppression du post par l'id ou le modérateur

    deletePost() {
      fetch("http://localhost:3000/api/post/deletePost", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(
          // transformation en JSON
          {
            post: this.post,
          }
        ),
      })
        .then(function (res) {
          // réponse à la requête

          if (res.ok) {
            // vérification déroulement de la requête
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function () {
          // récupération de l'identifiant du profil
        })

        .catch(function (err) {
          console.error(err);
        });
    },

    // modifier un post

    modifyPost() {
      fetch("http://localhost:3000/api/post/modifyPost", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          post: this.post,
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
          document.location.href = "/#/accueil";
        })

        .catch(function (err) {
          console.error(err);
        });
    },
  },
};
</script>

<style>
#forum {
  border: 2px solid transparent;
  margin: 20px auto;
  color: rgb(29, 29, 58);
}

.utilisateur {
}

#photo {
  border-radius: 50%;
  padding: 30px 30px;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}

.post {
  border: 2px solid white;
  background-color: white;
  width: 80%;
  height: 200px;
  margin: 20px auto;
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
