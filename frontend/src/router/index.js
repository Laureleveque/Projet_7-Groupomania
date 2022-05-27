import { createRouter, createWebHashHistory } from "vue-router";

//import HomeView from "../views/HomeView.vue";

import LogoHeader from "../components/logo.vue";
import ReseauPage from "../components/reseau.vue";
import LoginPage from "../components/login.vue";
import SignupPage from "../components/signup.vue";
import SignupokPage from "../components/signupok.vue";
import DeleteokPage from "../components/deleteok.vue";
import LogoutPage from "../components/logout.vue";
import NavigationPage from "../components/navigation.vue";
import ProfilPage from "../components/profil.vue";
import AccueilPage from "../components/accueil.vue";

const routes = [
  // tableau contenant des objets qui définissent chaque route
  {
    path: "/logo", // url correspondant au composant
    name: "Logo", // nom de cette route
    component: LogoHeader, // composant qui doit s'afficher quand le path est trouvé
  },

  {
    path: "/reseau",
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
    path: "/deleteok",
    name: "Deleteok",
    component: DeleteokPage,
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
    path: "/accueil",
    name: "Accueil",
    component: AccueilPage,
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
