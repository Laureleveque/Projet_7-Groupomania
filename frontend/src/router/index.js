import { createRouter, createWebHashHistory } from "vue-router";

//import HomeView from "../views/HomeView.vue";

import LogoHeader from "../components/logo.vue";
import AccueilPage from "../components/accueil.vue";
import LoginPage from "../components/login.vue";
import SignupPage from "../components/signup.vue";
import LogoutPage from "../components/logout.vue";
import NavigationPage from "../components/navigation.vue";
import ProfilPage from "../components/profil.vue";
import ForumPage from "../components/forum.vue";
import PostPage from "../components/post.vue";
import MediaPage from "../components/media.vue";

const routes = [
  // tableau contenant des objets qui définissent chaque route
  {
    path: "/logo", // url correspondant au composant
    name: "Logo", // nom de cette route
    component: LogoHeader, // composant qui doit s'afficher quand le path est trouvé
  },

  {
    path: "/accueil",
    name: "Accueil",
    component: AccueilPage,
  },

  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
  },

  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },

  {
    path: "/logout",
    name: "Logout",
    component: LogoutPage,
  },

  {
    path: "/navigation",
    name: "Navigation",
    component: NavigationPage,
  },

  {
    path: "/profil",
    name: "Profil",
    component: ProfilPage,
  },

  {
    path: "/forum",
    name: "Forum",
    component: ForumPage,
  },

  {
    path: "/post",
    name: "Post",
    component: PostPage,
  },

  {
    path: "/media",
    name: "Media",
    component: MediaPage,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
