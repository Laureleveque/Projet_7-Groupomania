<!-- composant Navigation -->

<template>
  <nav id="navigation">
    <ul>
      <li>
        <router-link to="/posts">
          <a>Accueil</a>
        </router-link>
      </li>

      <li>
        <router-link to="/profil">
          <a>Votre profil</a>
        </router-link>
      </li>

      <li>
        <a v-on:click="send()">Déconnexion</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import router from "@/router";

export default {
  name: "NavigationPage",

  methods: {
    send() {
      localStorage.removeItem("user-token");
      localStorage.removeItem("user-id");
      router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
/* variable */

$color-secondary: #fd2d01;

#navigation {
  margin-bottom: 50px;
  margin-top: 50px;
}

ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
}

nav {
  font-weight: 600;
}

a {
  color: white;
  font-size: 20px;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  border-bottom: 3px solid $color-secondary;
  padding: 60px auto;
  cursor: pointer;
}

/*   barre de navigation en responsive  */

@media screen and (max-width: 768px) {
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0px;
    margin-top: 0px;
    padding-left: 15px;
  }

  a {
    font-size: 18px;
  }
}
</style>
