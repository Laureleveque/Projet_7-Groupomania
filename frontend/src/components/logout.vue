<!-- Composant Logout -->

<template>
  <header>
    <LogoHeader />
  </header>
  <div id="deconnection">
    <h1>Vous êtes bien déconnecté(e) !</h1>
  </div>
</template>

<script>
import LogoHeader from "../components/logo.vue";

export default {
  name: "LogoutPage",
  components: {
    LogoHeader,
  },

  methods: {
    send() {
      fetch("http://localhost:3000/api/user/logout", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(function (res) {
          // réponse à la requête

          if (res.ok) {
            // vérification déroulement de la requête
            return res.json(); // résultat de la requête au format json (promise)
          }
          document.location.href = "/#/logout"; // lien vers la page accueil avec l'identifiant du profil
        })
        .catch(function (err) {
          console.error(err);
        });
    },
  },
};
</script>

<style>
@media screen and (max-width: 768px) {
  h1 {
    font-weight: 600;
    font-size: 20px;
  }
}
</style>
