import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Music from "../views/Music.vue";
import Contact from "../views/Contact.vue";
import Track from "../views/Track.vue";
import ErrorPage from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/music/:id",
    name: "Track",
    component: Track,
    props: true,
    beforeEnter: (to, from, next) => {
      if (to.params.id >= 1 && to.params.id <= 5) {
        return next();
      } else {
        next({ name: "Error" });
      }
    },
  },
  {
    path: "/404",
    alias: "*",
    name: "Error",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
