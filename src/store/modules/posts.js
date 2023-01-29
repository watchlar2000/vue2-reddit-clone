import { loadPosts, loadPostData } from "@/api";
// import { sortPosts } from "@/utils";

const sorting_options = [
  {
    key: "default",
    value: "Date posted",
  },
  {
    key: "most_upvoted",
    value: "Most upvoted",
  },
  {
    key: "most_commented",
    value: "Most Commented",
  },
];

const state = () => ({
  posts: [],
  post: null,
  sorting_options,
});

// getters
const getters = {
  postsQty: (state) => state.posts.length,
  posts: (state) => {
    return state.posts;
  },
  post: (state) => (id) => {
    const isPost = state.posts.find((post) => post.data.id === id);

    if (isPost === undefined) {
      return state.post;
    }

    return isPost.data;
  },
  sortingOptions: (state) => state.sorting_options,
};

// actions
const actions = {
  async getAllPosts({ commit }) {
    loadPosts().then((postsData) => {
      commit("SET_POSTS", postsData.data.children);
    });
  },
  async getPost({ commit, state }, { id, title }) {
    if (state.post && state.post.id === id) {
      console.log("post existing");
      return;
    }
    commit("RESET_CURRENT_POST");
    loadPostData({ id, title }).then((postData) => {
      const post = postData[0].data.children[0].data;
      commit("SET_POST", post);
    });
  },
};

// mutations
const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_POST(state, post) {
    state.post = post;
  },
  RESET_CURRENT_POST(state) {
    state.post = null;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
