// routes des composants

import { createRouter, createWebHashHistory } from "vue-router";

import LogoHeader from "../components/logo.vue";
import ReseauPage from "../components/reseau.vue";
import LoginPage from "../components/login.vue";
import SignupPage from "../components/signup.vue";
import DeletePage from "../components/delete.vue";
import NavigationPage from "../components/navigation.vue";
import ProfilPage from "../components/profil.vue";
import ProfilokPage from "../components/profilok.vue";
import PostsPage from "../components/posts.vue";
import SignupokPage from "../components/signupok.vue";
import FooterPage from "../components/footer.vue";

const routes = [
  // tableau contenant des objets qui définissent chaque route
  {
    path: "/logo", // url correspondant au composant
    name: "Logo", // nom de cette route
    component: LogoHeader, // composant qui doit s'afficher quand le path est trouvé
  },

  {
    path: "/footer",
    name: "Footer",
    component: FooterPage,
  },

  {
    path: "/",
    name: "Reseau",
    component: ReseauPage,
  },

  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
  },

  {
    path: "/signupok",
    name: "Signupok",
    component: SignupokPage,
  },

  {
    path: "/delete",
    name: "Delete",
    component: DeletePage,
  },

  {
    path: "/login",
    name: "Login",
    component: LoginPage,
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
    path: "/profilok",
    name: "Profilok",
    component: ProfilokPage,
  },

  {
    path: "/posts",
    name: "Posts",
    component: PostsPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
