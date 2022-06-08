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
            <!--img v-bind:src="assets/images/" alt="" /-->
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

          <!--   bouton like   
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
                aria-label="Aimer"
                role="img"
              ></i>
            </div>
            <div id="heart-number" class="number-btn">
              <p>{{ number.likes }}</p>
            </div>
          </div> -->
        </div>
      </div>

      <!--  fin de l'entête user du post  -->

      <!--   cadre pour les posts avec 3 boutons -->

      <form enctype="multipart/form-data" class="ajout-post">
        <div class="text">
          <textarea
            name="message"
            id="message"
            placeholder="Votre message :"
            v-model="text"
          ></textarea>
        </div>

        <!--   bouton pour inserer une image     -->

        <div class="ajout-image" v-if="newImage">
          <img :src="newImage" />
        </div>

        <div class="ajout-btn">
          <div
            class="ajout-btn-image"
            title="Ajouter une image (formats .jpeg, .jpg, .png)"
          >
            <label for="file">
              <i
                class="fas fa-image"
                aria-label="Ajouter une image"
                role="img"
              ></i>
            </label>

            <input
              type="file"
              name="image"
              id="file"
              accept="image/png, image/jpeg, image/jpg"
              ref="file"
              @change="handleFileUpload"
            />
          </div>
        </div>

        <!--     bouton pour enregistrer le post 

         <button type="submit" v-on:click="createPost()">
            Enregistrer
          </button> -->

        <div class="enregister">
          <input
            type="submit"
            value="Enregistrer"
            @click.prevent="createPost"
          />
        </div>

        <!--   bouton pour supprimer le post  -->

        <div
          class="delete-post"
          title="Supprimer le message"
          v-if="post.user_id == UserId || User == 'admin'"
          @click.prevent="deletePost"
        >
          <i
            class="fas fa-times"
            aria-label="Supprimer le message"
            role="button"
          ></i>
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

        fetch("http://localhost:3000/api/post/createPost", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
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
        like() {
            API.post(`posts/${this.postId}/likes`,
            {
                userId: localStorage.getItem("userId"),
                postId: this.postId
            })
            .then(response => {
                console.log(response);
                this.getLikesCount();
                this.getIfUserLiked();
            })
            .catch(error => console.log(error));
        },
        // display number of likes and comments of post
        getLikesCount() {
            API.get(`posts/${this.postId}/likesCount`)
           .then(response => {
                this.likes = response.data.likes;
            })
            .catch(error => console.log(error));
        },
        getCommentsCount() {
            API.get(`posts/${this.postId}/commentsCount`)
           .then(response => {
                this.commentsCount = response.data.commentsCount;
            })
            .catch(error => console.log(error));
        },
        // display if current user likes post
        getIfUserLiked() {
            API.get(`posts/${this.postId}/userLiked/${this.currentUserId}`)
            .then(response => {
                if(response.data == "true") {
                    const btn = document.getElementById('heart-btn');
                    btn.classList.remove('far');
                    btn.classList.add('fas');
                    const count = document.getElementById('heart-count');
                    count.classList.add('liked');
                } else if(response.data == "false") {
                    const btn = document.getElementById('heart-btn');
                    btn.classList.remove('fas');
                    btn.classList.add('far');
                    const count = document.getElementById('heart-count');
                    count.classList.remove('liked');
                }
            })
            .catch(error => console.log(error));
        }
    }
};

*/

    // suppression d'un post par l'id ou le modérateur

    deletePost() {
      fetch("http://localhost:3000/api/post/deletePost:id", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
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
#forum {
  border: 2px solid #737fe0;
  margin: auto;
  width: 500px;
  background: white;
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

#photo {
  border-radius: 50%;
  padding: 30px 30px;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
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
  &:hover {
    transform: scale(1.15);
  }
}

.ajout-post {
  padding: 30px 0 20px 0;
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;

    textarea {
      font-family: lato;
      margin: 10px 0 10px 0;
      padding: 10px;
      border: solid 1px #737fe0;
    }
  }
}

// image

.ajout-image {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 600px;
  margin: auto;

  img {
    max-width: 100%;
    object-fit: cover;
    margin: 5px 0 0 0;
  }
}

// bouton like

.post-like {
  .post_jaime {
    padding-right: 40px;
    font-size: 25px;
  }

  .post_jaime:hover {
    cursor: pointer;
    -webkit-transition: color 300ms;
    transition: color 300ms;
    -webkit-background-clip: text;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#ff79da),
      to(#9356dc)
    );
    background-image: linear-gradient(to bottom, #ff79da, #9356dc);
    color: transparent;
  }
}
// delete post or comment

.delete-post {
  &:hover {
    cursor: pointer;
  }
}
</style>
