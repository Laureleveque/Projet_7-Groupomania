<!-- component profil -->

<template>

	<div id="creation_profil"> 
    <div id="photo">
      <img src="">
    </div>
    <p class="username">{{  }}</p>
    <p class="nom">{{}}</p>
    <p class="prénom">{{}}</p>
    <p class="ville">{{}}</p>
    <p class="secteur">{{}}</p>
  </div>
   <div class="btn_creation">
      <input type="submit" value="Créer le profil">
    </div>

  <div id="modif_profil"> 
    <input type="submit" value="Modifier le profil">
  </div>

 <div id="suppression_profil"> 
    <div class="btn_suppression">
      <input type="submit" value="Supprimer le profil" >
    </div>
  </div>


</template>


<script>

import Logo from '../components/logo.vue'
import Logo from '../components/navigation.vue'

export default {
	
  name: 'Profil',
    
  components: {
		Logo,
    Navigation
  },

  data() {
    return {
      username: '',
      nom: '',
      prenom: '',
			ville: '',
      info: [],
      secteur:'',
      }
  } 
}         
/*
methods: {
    
  createProfil()  // créer un profil    

  getOneProfil() // récupérer un profil
                
  updateProfil() // modifier un profil
                
	deleteprofil() // supprimer un profil soit le compte

 }
*/

</script>

<style></style>
