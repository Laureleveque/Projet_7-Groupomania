<template>
  <header>
    <LogoHeader />
    <NavigationPage />
  </header>

  <main>
    <h3>Créer un post</h3>
    <section id="forum">
      <form
        @submit="createPost"
        method="post"
        enctype="multipart/form-data"
        class="ajout-post"
      >
        <div class="text">
          <textarea
            name="message"
            id="message"
            placeholder="Votre message :"
            v-model="text"
          ></textarea>

          <div class="ajout-image">
            <img :src="Image" />
          </div>
        </div>
        <div>
          <input
            type="file"
            name="image"
            id="file"
            accept="image/png, image/jpeg, image/jpg"
            ref="file"
          />
        </div>

        <div id="flex-btn">
          <button type="submit">Enregistrer le post</button>

          <!--<button
            type="submit"
            v-if="post.user_id == UserId || User == 'admin'"
            v-on:click="deletePost()"
          -->
          <button type="submit" v-on:click="deletePost()">
            Supprimer le post
          </button>
        </div>
      </form>
      <hr />

      <div v-for="post in posts" :key="post">
        <PostPage
          :photo="post.photo"
          :pseudo="post.pseudo"
          :date="post.date"
          :likes="post.likes"
          :text="post.text"
        />
      </div>
    </section>
  </main>
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";
import PostPage from "../components/post.vue";
import router from "@/router";
//import { table } from "console";

export default {
  name: "PostsPage",
  components: {
    LogoHeader,
    NavigationPage,
    PostPage,
  },
  data() {
    return {
      posts: [
        {
          photo: require("../assets/images/medit1.jpg"),
          pseudo: "Thib",
          date: "12/06/22",
          likes: 7,
          text: "Bonjour !",
        },
        {
          photo: require("../assets/images/Montagne.jpg"),
          pseudo: "Tiago",
          date: "09/05/21",
          likes: 6000,
          text: "Ouaf",
        },
      ],
      post: "",
      text: "",
      imageUrl: "",
    };
  },

  created() {
    this.getAllPosts();
  },

  methods: {
    createPost(e) {
      e.preventDefault();
      if (this.text != "") {
        // si post non vide
        fetch(
          "http://localhost:3000/api/user/" + localStorage.getItem("user-id"),
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
          .then((value) => {
            fetch(
              "http://localhost:3000/api/post/" +
                localStorage.getItem("user-id"),
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("user-token"),
                },
                body: JSON.stringify({
                  photo: value.photo,
                  pseudo: value.pseudo,
                  text: this.text,
                  imageUrl: this.imageUrl,
                }),
              }
            )
              .then(function (res) {
                if (res.ok) {
                  return res.json();
                }
              })
              .then(() => {
                this.getAllPosts();
              })
              .catch(function (err) {
                console.error(err);
              });
          })
          .catch(function (err) {
            console.error(err);
          });
      }
    },

    // suppression d'un post par l'id ou le modérateur

    deletePost() {
      fetch("http://localhost:3000/api/post/:id", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
        body: JSON.stringify({
          post: this.post, // ???
        }),
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
    },
    // récupération de tous les posts

    getAllPosts() {
      fetch("http://localhost:3000/api/post/", {
        method: "GET",
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
        .then((allPosts) => {
          allPosts.forEach((onePost) => {
            this.posts.unshift({
              //photo: require("../assets/images/icon.png"),
              photo: onePost.photo,
              pseudo: onePost.pseudo,
              date: onePost.date,
              likes: onePost.likes,
              text: onePost.text,
            });
          });
        })
        .catch(function (err) {
          console.error(err);
        });
    },

    emptyForm() {
      this.text = "";
      this.Image = "";
      //input.value = "";
    },
  },
};
</script>

<style lang="scss">
.text {
  margin: 20px auto 10px auto;
  width: 100%;
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
#like {
  display: flex;
  width: 55px;
  justify-content: space-between;
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
    max-width: 700px;
    width: 80%;
    max-width: 700px;
    font-family: lato;
    margin: 10px 0 10px 0;
    padding: 10px;
    border: solid 1px #4e5166;
  }
}

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
hr {
  height: 1px;
  background-color: #fd2d01;
  border: none;
}
#user_infos {
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.delete-post {
  &:hover {
    cursor: pointer;
  }
}
@media screen and (max-width: 768px) {
  .text {
    width: 100%;
  }
  #flex-btn {
    flex-direction: column;
    align-items: center;
  }
}
</style>
