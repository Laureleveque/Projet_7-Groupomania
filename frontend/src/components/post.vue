<template>
  <main>
    <div id="post">
      <!--  photo, pseudo, date et like  -->

      <div class="user">
        <div id="photo">
          <img :src="photo" alt="photo" />
          <!--<p>{{ photo }}</p>-->
        </div>

        <div id="user_infos">
          <div class="pseudo">
            <p>{{ pseudo }}, le {{ date }}</p>
          </div>

          <!-- bouton like -->
          <div id="like">
            <div class="like-icon">
              <i class="fa-solid fa-thumbs-up"></i>
            </div>

            <div id="like-number" class="like-btn">
              <p>{{ likes }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- fin de l'entête user du post  -->

    <!--   cadre pour les posts -->

    <form enctype="multipart/form-data" class="ajout-post">
      <div class="text">
        <p>{{ text }}</p>
      </div>

      <!--   bouton pour enregistrer le post  -->
      <div id="flex-btn">
        <!--   bouton pour supprimer le post  -->

        <!--<button
          type="submit"
          v-if="post.user_id == UserId || User == 'admin'"
          v-on:click="deletePost"
        >
        <button type="submit" v-on:click="deletePost">Supprimer le post</button>-->
      </div>
    </form>
    <hr />
  </main>
</template>

<script>
//import moment from "moment";
//import router from "@/router";

export default {
  name: "PostPage",
  components: {},
  data() {
    return {
      //photo: "",
      //pseudo: "",
      //date: "",
      //likes: "",
      //text: "",
    };
  },

  props: {
    photo: String,
    pseudo: String,
    date: String,
    likes: Number,
    text: String,
    imageUrl: String,
  },

  methods: {
    /*createPost() {
      this.UserId = localStorage.getItem("userId");
      if (this.text != "") {
        // si post non vide
        fetch(
          "http://localhost:3000/api/post/:id" +
            localStorage.getItem("user-id"),
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("user-token"),
            },
          }
        )
          .then(function (res) {
            if (res.ok) {
              return res.json();
            }
          })
          .then((res) => {
            this.UserId = localStorage.getItem("userId");
            this.pseudo = res.pseudo;
            this.likes = res.likes;
            this.text = res.text;
            this.imageUrl = res.imageUrl;
          })

          .catch(function (err) {
            console.error(err);
          });
      }
    },*/
    // suppression d'un post par l'id ou le modérateur
    /*deletePost() {
      fetch("http://localhost:3000/api/post/:id", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      })
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
        })

        .then(function () {
          localStorage.clear();
          router.push("/posts");
        })

        .catch(function (err) {
          console.error(err);
        });
    },*/
    // like post
    /*likePost() {
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
            postId: this.postId,
          }
        ),
      })
        .then(function (res) {
          console.log(res);
          // this.getNbLikes();
          if (res.ok) {
            return res.json();
          }
        })
        .catch(function (err) {
          console.error(err);
        });
    },*/
  },
};

/* Nombre de likes
  getNbLikes() {
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
                this.getNbLikes();
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

  },
};*/
</script>

<style lang="scss"></style>
