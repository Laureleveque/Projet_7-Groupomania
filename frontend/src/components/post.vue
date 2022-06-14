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

    <div v-if="!is_modified" class="message">
      <p>{{ text }}</p>
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
      <!--   bouton pour modifier le post  -->

      <button v-if="!is_modified" type="submit" v-on:click="is_modified = true">
        Modifier le post
      </button>
      <!--<button
          type="submit"
          v-if="post.user_id == UserId || User == 'admin'"
          v-on:click="deletePost"
        -->
      <button v-if="!is_modified" type="submit" v-on:click="deletePost">
        Supprimer le post
      </button>

      <button v-if="is_modified" type="submit" v-on:click="modifyPost">
        Enregistrer
      </button>
      <button v-if="is_modified" type="submit" v-on:click="is_modified = false">
        Annuler
      </button>
    </div>

    <hr />
  </main>
</template>

<script>
export default {
  name: "PostPage",
  components: {},
  data() {
    return {
      is_modified: false,
      updatable_text: "",
    };
  },
  props: {
    id: String,
    photo: String,
    pseudo: String,
    date: String,
    likes: Number,
    text: String,
    imageUrl: String,
  },

  created() {
    this.updatable_text = this.text;
  },

  methods: {
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
  },
};

/* like post
likePost() {
      fetch("http://localhost:3000/api/post/:id" + localStorage.getItem("user-id"), {
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
}*/

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

<style lang="scss">
/* variable */
$color-primary: #4e5166;
$color-secondary: #fd2d01;

div.message {
  background-color: white;
}

.message {
  max-width: 70%;
  min-width: 50%;
  font-family: lato;
  margin: 10px auto;
  padding: 10px;
  border: solid 1px $color-primary;
  p {
    color: #4e5166;
    text-align: left;
  }
}

@media screen and (max-width: 768px) {
  .message {
    width: 100%;
    height: 100%;
  }
}
</style>
