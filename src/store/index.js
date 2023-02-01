import Vue from "vue";
import Vuex from "vuex";
import posts from "./modules/posts";
import ui from "./modules/ui";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    ui,
  },
});
