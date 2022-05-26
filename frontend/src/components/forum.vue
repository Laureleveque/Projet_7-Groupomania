<!-- composant Forum  -->

<template>
  <header>
    <LogoHeader />
    <NavigationPage />
  </header>

  <div id="forum">
    <div id="messages">Messages</div>

    <form>
      <div>
        <label for="message"></label><br />
        <input type="text" v-model="message" id="message" required />
      </div>
    </form>
  </div>
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";

export default {
  name: "ForumPage",

  components: {
    LogoHeader,
    NavigationPage,
  },
};

/* methods

getAllPosts

*/
</script>

<style>
#forum {
  border: 2px solid transparent;
  width: 900px;
  height: 900px;
  background-color: white;
  margin: 40px auto;
  color: rgb(29, 29, 58);
}

#messages {
  font-size: 25px;
  font-weight: 600;
  color: rgb(29, 29, 58);
  text-align: left;
  margin: 50px 40px 50px 40px;
  border-bottom: 3px solid rgba(255, 110, 110, 1);
  padding-bottom: 5px;
}

#message {
  width: 500px;
  height: 100px;
}
</style>
