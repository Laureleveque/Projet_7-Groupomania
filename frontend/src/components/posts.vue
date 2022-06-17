<!--  composants posts-->

<template>
  <NavigationPage />

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
        </div>
        <div>
          <label>
            <i id="imageIcon" class="fa-solid fa-image"></i>
            <img id="preview" :src="previewImage" style="display: none" />
            <input
              type="file"
              name="image"
              id="file"
              accept="image/png, image/jpeg, image/jpg"
              ref="file"
              @change="onImageChange"
              style="display: none"
            />
          </label>
        </div>
        <button type="submit">Créer le post</button>
      </form>
      <hr />

      <div v-for="post in posts" :key="post">
        <PostPage
          :id="post.id"
          :date="post.date"
          :likes="post.likes"
          :text="post.text"
          :image="post.image"
          :creatorId="post.creatorId"
        />
      </div>
    </section>
  </main>
</template>

<script>
import NavigationPage from "../components/navigation.vue";
import PostPage from "../components/post.vue";

export default {
  name: "PostsPage",

  components: {
    NavigationPage,
    PostPage,
  },

  data() {
    return {
      posts: [],
      text: "",
      image: "",
      previewImage: "",
    };
  },

  created() {
    this.getAllPosts();
  },

  methods: {
    createPost(e) {
      e.preventDefault();
      if (this.text != "" || this.image != "") {
        // si post non vide

        let formData = new FormData();
        formData.append("text", this.text);
        formData.append("creatorId", localStorage.getItem("user-id"));
        if (this.image != "") {
          formData.append("image", this.image);
        }

        fetch("http://localhost:3000/api/post/", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("user-token"),
          },
          body: formData,
        })
          .then(function (res) {
            if (res.ok) {
              return res.json();
            }
          })
          .then(() => {
            this.getAllPosts();
            this.text = "";
            document.getElementById("file").value = ""; // On réinitialise le bouton parcourir
            document.getElementById("errorEmptyPost").innerHTML = ""; // On supprime le message d'erreur
            this.previewImage = "";
          })
          .catch(function (err) {
            console.error(err);
          });
      } else {
        // si post vide
        const message = document.getElementById("errorEmptyPost");
        message.innerHTML = "Votre post est vide !";
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
              id: onePost._id,
              date: onePost.date,
              likes: onePost.likes,
              text: onePost.text,
              image: onePost.imageUrl,
              creatorId: onePost.creatorId,
            });
          });
        })
        .catch(function (err) {
          console.error(err);
        });
    },

    onImageChange(e) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };

      this.image = e.target.files[0];
      reader.readAsDataURL(e.target.files[0]);
      document.getElementById("imageIcon").style.display = "none";
      document.getElementById("preview").style.display = "inline";
    },
  },
};
</script>

<style lang="scss">
/* variables */
$color-primary: #4e5166;
$color-secondary: #fd2d01;
$color-tertiary: white;

.text {
  margin: 10px auto;
  width: 100%;
}

.user {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#imageIcon {
  font-size: 50px;
}

#imageIcon:hover {
  cursor: pointer;
  color: #ffd7d7;
}

#preview {
  width: 200px;
  cursor: pointer;
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
  background: $color-tertiary;
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
