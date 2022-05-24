<!-- composant Profil -->

<template>
  <div id="profil">
    <h1>Mon profil</h1>

    <nav>
      <ul>
        <li>
          <a href="">Créer mon profil</a>
        </li>
        <li>
          <a href="">Modifier mon profil</a>
        </li>
        <li>
          <a href="">Supprimer mon profil</a>
        </li>
      </ul>
    </nav>
  </div>

  <!--
  <div id="photo">
    <img src="" />
  </div>
-->
  <!--
    <p class="username">{{}}</p>
    <p class="nom">{{}}</p>
    <p class="prénom">{{}}</p>
    <p class="ville">{{}}</p>
    <p class="secteur">{{}}</p>
  </div>
  <div class="btn_creation">
    <input type="submit" value="Créer le profil" />
  </div>

  <div id="modif_profil">
    <input type="submit" value="Modifier le profil" />
  </div>

  <div id="suppression_profil">
    <div class="btn_suppression">
      <input type="submit" value="Supprimer le profil" />
    </div>
  </div>
  -->
</template>

<script>
export default {
  name: "ProfilPage",

  components: {},

  data() {
    return {
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
h1 {
  font-weight: 600;
  margin-top: 10px;
}

#profil {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#photo {
  width: 150px;
  height: 150px;
  border: 2px solid black;
  margin-left: 60px;
}

ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-left: 300px;
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
</style>
