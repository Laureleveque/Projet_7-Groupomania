<!--  composants posts-->

<template>
  <header>
    <LogoHeader />
    <NavigationPage />
  </header>

  <main>
    <section id="forum">
      <p id="errorEmptyPost"></p>
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
        <button type="submit">Créer le post</button>
      </form>
      <hr />

      <div v-for="post in posts" :key="post">
        <PostPage
          :id="post.id"
          :photo="post.photo"
          :pseudo="post.pseudo"
          :date="post.date"
          :likes="post.likes"
          :text="post.text"
          :creatorId="post.creatorId"
        />
      </div>
    </section>
  </main>
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";
import PostPage from "../components/post.vue";
//import router from "@/router";
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
        /*{
          id: "1",
          photo: require("../assets/images/medit1.jpg"),
          pseudo: "Thib",
          date: "12/06/22",
          likes: 7,
          text: "Bonjour !",
          creatorId: "1",
        },
        {
          id: "2",
          photo: require("../assets/images/Montagne.jpg"),
          pseudo: "Tiago",
          date: "09/05/21",
          likes: 6000,
          text: "Ouaf",
          creatorId: "2",
        },*/
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
            fetch("http://localhost:3000/api/post/", {
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
                creatorId: localStorage.getItem("user-id"),
              }),
            })
              .then(function (res) {
                if (res.ok) {
                  return res.json();
                }
              })
              .then(() => {
                this.getAllPosts();
                this.text = "";
              })
              .catch(function (err) {
                console.error(err);
              });
          })
          .catch(function (err) {
            console.error(err);
          });
      } else {
        // si post vide
        const message = document.getElementById("errorEmptyPost");
        message.innerHTML = "Vous n'avez écrit aucun message !";
        message.style.color = "red";
      }
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
              id: onePost._id,
              photo: onePost.photo,
              pseudo: onePost.pseudo,
              date: onePost.date,
              likes: onePost.likes,
              text: onePost.text,
              creatorId: onePost.creatorId,
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
    },
  },
};
</script>

<style lang="scss">
/* variables */
$color-primary: #4e5166;
$color-secondary: #fd2d01;

.text {
  margin: 10px auto;
  width: 100%;
}

.user {
  display: flex;
  flex-direction: column;
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
  justify-content: space-around;
  align-items: center;
}

#flex-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border-bottom: $color-secondary;
}

button {
  background: white;
  color: $color-primary;
  font-size: 0.8em;
  font-weight: 600;
  width: 170px;
  height: 40px;
  transform: scale(1);
  border-radius: 20px;
  border: 4px solid $color-primary;
  margin-top: 30px;
  &:hover {
    transform: scale(1.15);
  }
}
.ajout-post {
  padding: 10px 10px 20px 10px;
  textarea {
    max-width: 70%;
    min-width: 50%;
    font-family: lato;
    margin: 10px 0px;
    padding: 10px;
    border: solid 1px $color-primary;
  }
}
.btn-image {
  margin: 0px auto 0px auto;
}
#photo {
  border: 3px solid $color-secondary;
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
  background-color: $color-secondary;
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
  .ajout-post {
    padding: 10px 10px 20px 10px;
    textarea {
      max-width: 70%;
      min-width: 50%;
    }
  }
  #flex-btn {
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
}
</style>
