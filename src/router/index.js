import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutMovie from "../components/AboutMovie.vue";
import Banner from "../components/Banner.vue";
import FavoriteMovies from "../components/FavoriteMovies.vue"



const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },

  {
    path: "/favorite",
    name: "favorite",
    component: FavoriteMovies,
  },

   {
    path: "/about_movie/:id",
    name: "about",
    component: AboutMovie,
  },

   {
    path: "/banner",
    name: "banner",
    component: Banner,
  },

];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

 
  
export default router;
  
  // {
  //   path: "/signin",
  //   name: "signin",
  //   component: SignIN,
  // },
  // {
  //   path: "/resetpass",
  //   name: "resetpass",
  //   component: ResetPassword,
  // },
  // {
  //   path: "/checkemail",
  //   name: "checkemail",
  //   component: CheckEmail,
  // },
  // {
  //   path: "/verification",
  //   name: "verification",
  //   component: Verification,
  // },
  // {
  //   path: "/newpass",
  //   name: "newpass",
  //   component: CreateNewpass,
  // },
  // {
  //   path: "/brands",
  //   name: "brands",
  //   component: Brands,
  // },
  // {
  //   path: "/shops",
  //   name: "shops",
  //   component: Shops,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: About,
  // },
  // {
  //   path: "/contact",
  //   name: "contact",
  //   component: Contact,
  // },
  // {
  //   path: "/mainNavbar",
  //   name: "navbar",
  //   component: mainNavbar,
  // },



