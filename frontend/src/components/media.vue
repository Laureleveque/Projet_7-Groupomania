<!-- composant Media -->

<template>
  <header>
    <LogoHeader />
    <NavigationPage />
  </header>

  <div id="media">
    <div id="medias">Medias</div>
  </div>
</template>

<script>
import LogoHeader from "../components/logo.vue";
import NavigationPage from "../components/navigation.vue";

export default {
  name: "MediaPage",

  components: {
    LogoHeader,
    NavigationPage,
  },
};

/* methods
getOnePhoto
getAllPhotos
deletePhoto
*/
</script>

<style>
#media {
  border: 2px solid transparent;
  width: 900px;
  height: 900px;
  background-color: white;
  margin: 40px auto;
  color: rgb(29, 29, 58);
}

#medias {
  font-size: 25px;
  font-weight: 600;
  color: rgb(29, 29, 58);
  text-align: left;
  margin: 50px 40px 50px 40px;
  border-bottom: 4px solid rgba(255, 110, 110, 1);
  padding-bottom: 5px;
}
</style>
