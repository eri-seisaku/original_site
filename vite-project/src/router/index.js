import * as vueRouter from "vue-router";
import Movie from "../components/pages/Movie.vue";
import Home from "../components/pages/Home.vue";
import English from "../components/pages/English.vue";
import French from "../components/pages/French.vue";
import Reserve from "../components/pages/Reserve.vue";

const routes = [
  {
    path: "/",
    component: Movie,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/en",
    component: English,
  },
  {
    path: "/fr",
    component: French,
  },
  {
    path: "/reserve",
    component: Reserve,
  }
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;