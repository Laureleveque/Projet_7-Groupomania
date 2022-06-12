<template>
  <header>
    <LogoHeader />
    <NavigationPage />
  </header>

  <main>
    <section id="forum">
      <form enctype="multipart/form-data" class="ajout-post">
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
          <button type="submit" v-on:click="createPost()">
            Enregistrer le post
          </button>

          <button type="submit" v-on:click="deletePost()">
            Supprimer le post
          </button>
        </div>
      </form>
      <hr />

      <div v-for="post in posts" :key="post.pseudo">
        {{ post.pseudo }}
        {{ post.date }}

        <PostPage pseudo="{{post.pseudo}}" />
      </div>
    </section>
  </main>
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";
import PostPage from "../components/post.vue";
import moment from "moment";
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
        { pseudo: "Tibo", date: "10/06/22" },
        { pseudo: "Tiago", date: "09/05/21" },
      ],
      post: "",
      text: "",
      Image: "",
    };
  },

  // récupération de tous les posts

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
        if (res.ok) {
          return res.json();
        }
      })
      .catch(function (err) {
        console.error(err);
      });
  },

  moment() {
    this.moment = moment;
  },

  methods: {
    createPost() {
      if (this.text != "") {
        // si post non vide
        fetch(
          "http://localhost:3000/api/post/" + localStorage.getItem("user-id"),
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
          .then(() => {
            this.UserId = localStorage.getItem("userId");

            this.moment();
            this.emptyForm();
          })
          .catch(function (err) {
            console.error(err);
          });
      }
    },

    emptyForm() {
      this.text = "";
      this.Image = "";
      //input.value = "";
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
        body: JSON.stringify({
          post: this.post, // ???
        }),
      })
        .then(function (res) {
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
// delete post or comment
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
