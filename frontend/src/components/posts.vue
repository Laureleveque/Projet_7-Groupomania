<template>
  <header>
    <LogoHeader />
    <NavigationPage />
  </header>

  <main>
    <section id="forum">
      <!--   posts  -->

      <div id="post">
        <!--  photo, pseudo, date et like  -->

        <div class="user">
          <div id="photo">
            <img src="../assets/images/icon.png" alt="Photo" />
          </div>

          <div class="pseudo">
            <p>Tibo, le 10/06/22 à 17h57</p>
          </div>

          <!--   date  -->

          <div class="date">
            <p>
              <!--{{ moment(post.createdAt).format("[Le] D MMMM YYYY [à] HH:mm") }}-->
            </p>
          </div>

          <!-- bouton like -->
          <div
            class="post-like"
            @click.prevent="like()"
            v-for="number in likes"
            :key="number.post_id"
          >
            <div class="like-icon">
              <i id="heart-btn" class="far fa-heart" aria-label="Like"></i>
            </div>
            <div id="like-number" class="like-btn">
              <p>{{ number.likes }}</p>
            </div>
          </div>
        </div>
      </div>

      <!--  fin de l'entête user du post  -->

      <!--   cadre pour les posts -->

      <form enctype="multipart/form-data" class="ajout-post">
        <div class="text">
          <textarea
            name="message"
            id="message"
            placeholder="Votre message :"
            v-model="text"
          ></textarea>

          <!--   bouton pour inserer une image     -->

          <div class="ajout-image">
            <img :src="newImage" />
          </div>
        </div>
        <div
          class="btn-image"
          title="Ajouter une image (formats .jpeg, .jpg, .png)"
        >
          <input
            type="file"
            name="image"
            id="file"
            accept="image/png, image/jpeg, image/jpg"
            ref="file"
            @change="handleFileUpload"
          />
        </div>

        <!--   bouton pour enregistrer le post  -->
        <div id="flex-btn">
          <button type="submit" v-on:click="createPost()">
            Enregistrer le post
          </button>

          <!--   bouton pour supprimer le post  -->

          <button type="submit" v-on:click="deletePost()">
            Supprimer le post
          </button>
        </div>
      </form>
      <br />
      <hr />
      <br />
      <div id="post">
        <!--  photo, pseudo, date et like  -->

        <div class="user">
          <div id="photo">
            <img src="../assets/images/icon.png" alt="Photo" />
          </div>

          <div class="pseudo">
            <p>{{ pseudo }}</p>
          </div>

          <!--   date  -->

          <div class="date">
            <p>
              <!--{{ moment(post.createdAt).format("[Le] D MMMM YYYY [à] HH:mm") }}-->
            </p>
          </div>

          <!--  bouton like  -->
          <div
            class="post-like"
            title="liker"
            @click.prevent="like()"
            v-for="number in likes"
            :key="number.post_id"
          >
            <div class="like-icon">
              <i
                id="heart-btn"
                class="far fa-heart"
                aria-label="Like"
                role="img"
              ></i>
            </div>
            <div id="like-number" class="like-btn">
              <p>{{ number.likes }}</p>
            </div>
          </div>
        </div>
      </div>

      <!--  fin de l'entête user du post  -->

      <!--   cadre pour les posts -->

      <form enctype="multipart/form-data" class="ajout-post">
        <div class="text">
          <textarea
            name="message"
            id="message"
            placeholder="Votre message :"
            v-model="text"
          ></textarea>

          <!--   bouton pour inserer une image     -->

          <div class="ajout-image">
            <img :src="newImage" />
          </div>
        </div>
        <div
          class="btn-image"
          title="Ajouter une image (formats .jpeg, .jpg, .png)"
        >
          <!--label for="file">
                <i
                  class="fas fa-image"
                  aria-label="Ajouter une image"
                  role="img"
                ></i>
              </label-->

          <input
            type="file"
            name="image"
            id="file"
            accept="image/png, image/jpeg, image/jpg"
            ref="file"
            @change="handleFileUpload"
          />
        </div>

        <!--   bouton pour enregistrer le post  -->
        <div id="flex-btn">
          <button type="submit" v-on:click="createPost()">
            Enregistrer le post
          </button>

          <!--   bouton pour supprimer le post  -->

          <button type="submit" v-on:click="deletePost()">
            Supprimer le post
          </button>
        </div>
      </form>
      <hr />

      <div id="post">
        <!--  photo, pseudo, date et like  -->

        <div class="user">
          <div id="photo">
            <img src="../assets/images/icon.png" alt="Photo" />
          </div>

          <div class="pseudo">
            <p>{{ pseudo }}</p>
          </div>

          <!--   date  -->

          <div class="date">
            <p>
              <!--{{ moment(post.createdAt).format("[Le] D MMMM YYYY [à] HH:mm") }}-->
            </p>
          </div>

          <!--  bouton like -->
          <div
            class="post-like"
            title="liker"
            @click.prevent="like()"
            v-for="number in likes"
            :key="number.post_id"
          >
            <div class="like-icon">
              <i class="fa-solid fa-user"></i>
            </div>
            <div id="like-number" class="like-btn">
              <p>{{ number.likes }}</p>
            </div>
          </div>
        </div>
      </div>

      <!--  fin de l'entête user du post  -->

      <!--   cadre pour les posts -->

      <form enctype="multipart/form-data" class="ajout-post">
        <div class="text">
          <textarea
            name="message"
            id="message"
            placeholder="Votre message :"
            v-model="text"
          ></textarea>

          <!--   bouton pour inserer une image     -->

          <div class="ajout-image">
            <img :src="newImage" />
          </div>
        </div>
        <div
          class="btn-image"
          title="Ajouter une image (formats .jpeg, .jpg, .png)"
        >
          <!--label for="file">
                <i
                  class="fas fa-image"
                  aria-label="Ajouter une image"
                  role="img"
                ></i>
              </label-->

          <input
            type="file"
            name="image"
            id="file"
            accept="image/png, image/jpeg, image/jpg"
            ref="file"
            @change="handleFileUpload"
          />
        </div>

        <!--   bouton pour enregistrer le post  -->
        <div id="flex-btn">
          <button type="submit" v-on:click="createPost()">
            Enregistrer le post
          </button>

          <!--   bouton pour supprimer le post  -->

          <button type="submit" v-on:click="deletePost()">
            Supprimer le post
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";

import moment from "moment";
import router from "@/router";

//src = "https://kit.fontawesome.com/5cc44e8d6b.js";

export default {
  name: "PostsPage",
  components: {
    LogoHeader,
    NavigationPage,
  },

  data() {
    return {
      posts: {},
      post: "",
      file: "",
      text: "",
      newImage: "",
    };
  },

  createPost() {
    this.currentUserId = localStorage.getItem("userId");
    this.getAllPosts();
    //this.moment();
  },

  methods: {
    // récupérer les posts

    getAllPosts() {
      fetch("http://localhost:3000/api/post/getAllPosts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },

        body: JSON.stringify(
          // transformation en JSON
          {
            posts: this.posts,
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

        .catch(function (err) {
          console.error(err);
        });
    },

    moment() {
      this.moment = moment;
    },

    // enregistrement d'un post

    checkPost() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
      this.newImage = URL.createObjectURL(this.file);

      const Post = new Post();

      Post.append("image", this.file);
      Post.append("text", this.text);
      Post.append("userId", this.currentUserId);

      if (this.file != "" || this.text != "") {
        // si post non vide

        fetch("http://localhost:3000/api/post/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("user-token"),
          },

          body: JSON.stringify(
            // transformation en JSON
            {
              posts: this.posts,
            }
          ),
        })
          .then(function (res) {
            console.log(res);
            this.emptyForm();
            this.getAllPosts();

            if (res.ok) {
              // vérification déroulement de la requête
              return res.json(); // résultat de la requête au format json (promise)
            }
          })

          .then(function () {
            router.push("/accueil");
          })

          .catch(function (err) {
            console.error(err);
          });
      } else {
        this.errorMessage = "Vous n'avez écrit aucun message";
      }
    },

    emptyForm() {
      this.text = "";
      this.newImage = "";
      this.file = "";

      const input = document.getElementById("file");
      input.value = "";
    },

    /* like post

    likePost() {
      fetch("http://localhost:3000/api/post/:id", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
        
        body: JSON.stringify(
          // transformation en JSON
          {
            userId: localStorage.getItem("userId"),
            postId: this.postId
          }
        ),
      })
        .then(function (res) {

                console.log(response);
                this.getNbreLikes();
            })

          if (res.ok) {
            return res.json(); 
          }
        }
  }
        .catch(function (err) {
          console.error(err);
        });
  }
      
      
// Nombre de likes

  getNbreLikes() {
    fetch("http://localhost:3000/api/post/:id", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      
      })
        .then(function (res) {

                console.log(response);
                this.getNbreLikes();
            })

          if (res.ok) {
            return res.json(); 
          }
        })

        .catch(function (err) {
          console.error(err);
        });
    },
  },
};
           

*/

    // suppression d'un post par l'id ou le modérateur

    deletePost() {
      fetch("http://localhost:3000/api/post/:id", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },

        body: JSON.stringify(
          // transformation en JSON
          {
            post: this.post, // ???
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

        .catch(function (err) {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.text {
  margin-left: 20px;
  margin-bottom: 0px;
  padding-bottom: 0px;
}

#forum {
  margin: auto;
  background: #4e5166;
}

.user {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

#entete-post {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

#flex-btn {
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  border-bottom: #fd2d01;
}

button {
  background: white;
  color: #4e5166;
  font-size: 1em;
  width: 200px;
  height: 50px;
  transform: scale(1);
  border-radius: 20px;
  border: 4px solid #4e5166;
  margin-top: 30px;

  &:hover {
    transform: scale(1.15);
  }
}

.ajout-post {
  padding: 0px 10px 20px 10px;

  textarea {
    width: 80%;
    max-width: 700px;
    font-family: lato;
    margin: 10px 0 10px 0;
    padding: 10px;
    border: solid 1px #4e5166;
  }
}

#file {
  width: 100px;

  margin-bottom: 0px;
}

// image
.btn-image {
  margin: 0px auto 0px auto;
}

#photo {
  border: 4px solid #fd2d01;
  width: 100px;
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

// bouton like

// delete post or comment

.delete-post {
  &:hover {
    cursor: pointer;
  }
}

@media screen and (max-width: 768px) {
  #flex-btn {
    flex-direction: column;
    align-items: center;
  }
}
</style>
