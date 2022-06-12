<template>
  <div id="post">
    <!--  photo, pseudo, date et like  -->

    <div class="user">
      <div id="photo">
        <img src="../assets/images/icon.png" alt="Photo" />
      </div>

      <div id="user_infos">
        <div class="pseudo">
          <p>{{ pseudo }}, le {{ date }}</p>
        </div>

        <!--   date  -->

        <div class="date">
          <p>
            <!--{{moment().subtract(10, 'days').calendar(); }}-->
          </p>
        </div>

        <!-- bouton like -->
        <div id="like">
          <div class="like-icon">
            <i class="fa-solid fa-thumbs-up"></i>
          </div>

          <div id="like-number" class="like-btn">
            <p>{{ nbLikes }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- fin de l'entête user du post  -->

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
    <div>
      <input
        type="file"
        name="image"
        id="file"
        accept="image/png, image/jpeg, image/jpg"
        ref="file"
      />
    </div>

    <!--   bouton pour enregistrer le post  -->
    <div id="flex-btn">
      <button type="submit" v-on:click="createPost">Enregistrer le post</button>

      <!--   bouton pour supprimer le post  -->

      <button type="submit" v-on:click="deletePost">Supprimer le post</button>
    </div>
  </form>
  <hr />
</template>

<script>
export default {
  name: "PostPage",
  components: {},
  data() {
    return {
      pseudo: "Tibo",
      date: "10/06/22",
      nbLikes: 7,
      text: "",
    };
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

<style lang="scss"></style>
