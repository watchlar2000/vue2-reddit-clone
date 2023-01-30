import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import SavedPostsView from "../views/SavedPostsView.vue";
import AboutView from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/my_saved_posts",
    name: "my_saved_posts",
    component: SavedPostsView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/post/:id/:title",
    name: "post",
    component: PostView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
