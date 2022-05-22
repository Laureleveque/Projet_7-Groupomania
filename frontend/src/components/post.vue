<!-- component post -->

<template> 
  
</template>


<script>

import Logo from '../components/logo.vue'
import Logo from '../components/navigation.vue'

export default {
    name: "Post",
    components: {
		    Logo,
        Navigation
  },

    data() {
      return {    
        commentaire: '',          
  }
  },
/*
    methods: {
        
  getOnePost() // récupérer un post
        
  createPost()  // créer un post    
        
  deletePost() // supprimer un post (uniquement le créateur ou le modérateur)
}
*/
}

</script>

<style>
  
</style>
