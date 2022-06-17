<!--  composant profil -->

<template>
    <NavigationPage />

    <main>
      <div class="profil">
        
        <div id="photo">
          <img :src="previewPhoto" alt="Photo" />
          </div>

          <br />
          <label for="file">
            <p id="modifyPhoto">Modifier votre photo</p>
            <input
            type="file"
            name="image"
            id="file"
            ref="file"
            @change="onImageChange"
            accept="image/png, image/jpeg, image/jpg"
            style="display: none"/>
          </label>

        <br />
        <br />
        <form method="post">
          <div>
            <br />
            <label for="email">Email :</label><br />
              <input
            type="email"
            name="email"
            v-model="email"
            id="email"
            required
             />
          </div>
          <br/>

        <div>
          <label for="pseudo">Pseudo :</label><br />
          <input
            type="text"
            name="pseudo"
            v-model="pseudo"
            id="pseudo"
            required
          />
        </div>
        <br/>


        <p v-if="errors.length">
          <b>Merci de corriger les erreurs suivantes :</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>
 </form>               
          <button type="submit" v-on:click="checkProfil">Modifier mon profil</button>
          <br />       
          <button type="submit" v-on:click="deleteUser">Supprimer mon compte</button>          
      </div>
    </main>
</template>

<script>

import router from "@/router";
import NavigationPage from "../components/navigation.vue";

export default {
  name: "ProfilPage",

  components: {
    NavigationPage,
  },

  data() {
    return {
      errors : [],
      photo: "",
      pseudo: "",
      email: "",
      previewPhoto: ""
    };
  },

  created() {
    this.getProfil();
  },

  methods: {
    checkProfil(e) {
      // gestion des erreurs
      this.errors = [];

      // vérification si email non vide et format requis
      var re =
        /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

      if (!this.email || !re.test(this.email)) {
        this.errors.push("Inscrire une adresse mail valide");
      }

      //si aucune erreur
      if (!this.errors.length) {
        this.modifyProfil(); // envoi des données
      }
      e.preventDefault();
    },
    
    getProfil() {
      fetch("http://localhost:3000/api/user/" + localStorage.getItem("user-id"), {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("user-token"),
          }
        })

        .then(function (res) {
          if (res.ok) {
            return res.json(); 
          }
        })

        .then((res) => {
          this.previewPhoto = res.photo;
          this.email = res.email;
          this.pseudo = res.pseudo;
        })

        .catch(function (err) {
          console.error(err);
        });
    },

    // modifier le profil
    modifyProfil() {
      
      let formData = new FormData();
      formData.append("pseudo", this.pseudo);
      formData.append("email", this.email);
      if (this.photo != "") {
        formData.append("image", this.photo);
      }

      fetch("http://localhost:3000/api/user/" + localStorage.getItem("user-id"), {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },

        body: formData
      })
        .then(function (res) {
          if (res.ok) {          
            return res.json();
          }})
      
          .then(function () {
            router.push('/profilok');    
          })
    
        .catch(function (err) {
          console.error(err);
         })   
    },

    // suppression du compte
    deleteUser() {
      fetch("http://localhost:3000/api/user/" + localStorage.getItem("user-id"), {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      })
        .then(function (res) {
          if (res.ok) {
            return res.json(); // résultat de la requête au format json (promise)
          }
        })

        .then(function () {
          localStorage.clear();
          router.push("/");
        })

        .catch(function (err) {
          console.error(err);
        })
    },

    onImageChange(e) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.previewPhoto = e.target.result;
      };

      this.photo = e.target.files[0];
      reader.readAsDataURL(e.target.files[0]);
    }
  }
}
</script>

<style scoped lang="scss">


/* variables */

$color-primary: #4e5166;
$color-secondary: #fd2d01;
$color-tertiary: white;

#profil {
  border: 2px solid transparent;
  margin: 40px auto;
}

#modifyPhoto:hover {
  color: $color-secondary;
  cursor: pointer;
}

#pseudo,
#email,
#password {
  
  width: 400px;
  height: 30px;
  margin-bottom: 20px;
}


#photo {
  border: 3px solid $color-secondary;
  width:100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 0 0 0 0;
}

#photo img {
  max-width: none;
  width: 100px;
  height: 100px;
}

textarea {
  font-family: lato;
  padding-left: 20px;
}

button {
  background: $color-tertiary;
  color: $color-primary;
  font-size: 0.8em;
  font-weight: 600;
  width: 170px;
  height: 40px;
  transform: scale(1);
  border-radius: 20px;
  border: 2px solid $color-primary;
  margin-top: 20px;
  margin-bottom: 30px;
 
  &:hover {
    transform: scale(1.15);
    
  }
}

@media screen and (max-width: 768px) {
  
  #profil {
    width: 90%;
   
  }

  #pseudo,
  #email,
  #password {
    width: 80%;
    min-width: 300px;
  }

  img {
    width: 60%;
  }
}
</style>
