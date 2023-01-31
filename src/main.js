import Vue from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import "@/styles/globals.css";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

// console.log(store);
// store.dispatch("posts/getAllPosts");
// console.log(store.getters["posts/posts"]);
// store.commit("getAllPosts");
// console.log(store.state.posts);
