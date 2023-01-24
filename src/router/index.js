import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/post/:id",
    name: "post",
    component: PostView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
