<!--  composant post  -->

<template>
  <article>
    <div>
      <!--  photo, pseudo, date et like  -->

      <div class="user">
        <div id="photo">
          <img :src="photo" alt="photo" />
        </div>

        <div id="user_infos">
          <div class="pseudo">
            <p>{{ pseudo }}, le {{ date }}</p>
          </div>

          <!-- bouton like -->

          <span id="like">
            <a v-on:click="likePost">
              <i class="fa-solid fa-thumbs-up" :style="thumb_color"></i>
            </a>
            <p>{{ updatable_likes }}</p>
          </span>
        </div>
      </div>
    </div>

    <!-- fin de l'entête user du post  -->

    <!--   cadre si is_modified est true : on modifie le texte -->

    <div v-if="!is_modified" class="message">
      <p>{{ text }}</p>
      <img id="image" :src="image" />
    </div>
    <textarea
      v-if="is_modified"
      name="message"
      id="message"
      class="message"
      placeholder="Votre message :"
      v-model="updatable_text"
    ></textarea>

    <div id="flex-btn">
      <!--   bouton pour soit Modifier ou Supprimer le post ( par le créateur ou l'administrateur ) -->

      <button
        v-if="!is_modified && (isCreator() || isAdmin())"
        type="submit"
        v-on:click="is_modified = true"
      >
        Cliquez pour modifier
      </button>
      <button
        v-if="!is_modified && (isCreator() || isAdmin())"
        type="submit"
        v-on:click="deletePost"
      >
        Supprimer le post
      </button>

      <!--  si 'Modifier' : soit bouton 'Enregistrer' ou 'Annuler' après modification du post  -->

      <button
        v-if="is_modified && (isCreator() || isAdmin())"
        type="submit"
        v-on:click="modifyPost"
      >
        Enregistrer
      </button>
      <button
        v-if="is_modified && (isCreator() || isAdmin())"
        type="submit"
        v-on:click="is_modified = false"
      >
        Annuler
      </button>
    </div>
    <hr />
  </article>
</template>

<script>
export default {
  name: "PostPage",

  data() {
    return {
      pseudo: "",
      photo: "",
      is_modified: false,
      updatable_text: "",
      updatable_likes: 0,
      thumb_color: "color: white;",
    };
  },
  props: {
    id: String,
    date: String,
    likes: Number,
    text: String,
    image: String,
    creatorId: String,
  },

  created() {
    this.updatable_text = this.text;
    this.updatable_likes = this.likes;
    this.getCreatorInfos();
    this.isLiked();
  },

  methods: {
    getCreatorInfos() {
      fetch("http://localhost:3000/api/user/" + this.creatorId, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((value) => {
          this.pseudo = value.pseudo;
          this.photo = value.photo;
        });
    },

    // modifier le post

    modifyPost() {
      fetch(
        "http://localhost:3000/api/post/" + this.id, //id du post
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("user-token"),
          },

          body: JSON.stringify({
            text: this.updatable_text,
          }),
        }
      )
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
        })

        .then(() => {
          this.is_modified = false;
          this.$parent.posts.find((post) => post.id == this.id).text =
            this.updatable_text;
        })

        .catch(function (err) {
          console.error(err);
        });
    },

    // suppression d'un post par l'id ou le modérateur

    deletePost() {
      fetch(
        "http://localhost:3000/api/post/" + this.id, //id du post
        {
          method: "DELETE",
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
          this.$parent.posts = this.$parent.posts.filter(
            (post) => post.id != this.id
          );
        })
        .catch(function (err) {
          console.error(err);
        });
    },

    // like post

    likePost() {
      fetch("http://localhost:3000/api/post/like/" + this.id, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
        body: JSON.stringify(
          // transformation en JSON
          {
            userId: localStorage.getItem("user-id"),
            postId: this.id,
          }
        ),
      })
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
        })
        .then((value) => {
          this.updatable_likes = value.likes;
          this.isLiked();
        })
        .catch(function (err) {
          console.error(err);
        });
    },

    isCreator() {
      return this.creatorId == localStorage.getItem("user-id");
    },

    isAdmin() {
      return localStorage.getItem("user-id") == "62a8af950a1a56a2cca8ba79"; // id de l'admin
    },

    isLiked() {
      fetch(
        "http://localhost:3000/api/post/like/" + this.id, //id du post
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
          if (value.usersLiked.includes(localStorage.getItem("user-id"))) {
            this.thumb_color = "color: #FFD7D7;";
          } else {
            this.thumb_color = "color: white;";
          }
        });
    },
  },
};
</script>

<style lang="scss">
/* variables */

$color-primary: #4e5166;
$color-secondary: #fd2d01;
$color-tertiary: white;

#user_infos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
}

div.message {
  background-color: $color-tertiary;
}

#like {
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-around;
  margin-left: 30px;
  align-items: center;
  i {
    margin-right: 30px;
  }
}

.pseudo p {
  width: 300px;
}

.message {
  max-width: 70%;
  min-width: 50%;
  margin: 10px auto;

  border: solid 2px $color-secondary;
  p {
    color: $color-primary;
    text-align: left;
    padding: 15px;
    font-family: lato;
  }
  img {
    width: 200px;
  }
}

@media screen and (max-width: 768px) {
  .message {
    width: 100%;
    height: 100%;
  }
}
</style>
