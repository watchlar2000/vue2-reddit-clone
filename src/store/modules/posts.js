import { loadPosts, loadPostData } from "@/api";
import { SORTING_OPTIONS, customSortDescending } from "@/utils";

const state = () => ({
  posts: [],
  post: null,
  page: 1,
  loading: false,
  error: null,
  currentSortingOption: SORTING_OPTIONS[0], // default
  sortingOptions: SORTING_OPTIONS,
});

// getters
const getters = {
  maxPostsQty: (state) => state.posts.length,
  getPost: (state) => (id) => {
    const isPost = state.posts.find((post) => post.data.id === id);

    if (isPost === undefined) {
      return state.post;
    }

    return isPost.data;
  },
  currentSortingOption: (state) => {
    return state.currentSortingOption;
  },
};

// actions
const actions = {
  async getAllPosts({ commit, state }, userSortingParam = null) {
    commit("SET_LOADING", true);

    if (userSortingParam === null) {
      loadPosts().then((postsData) => {
        const sortingParam = state.currentSortingOption.param;
        const postsArr = postsData.data.children;
        const sortedPostsArr = customSortDescending(postsArr, sortingParam);
        commit("SET_POSTS", sortedPostsArr);
        commit("SET_LOADING", false);
      });
      return;
    }

    commit("SORT_POSTS", userSortingParam);
    commit("SET_LOADING", false);
  },
  async setPost({ commit }, { id, title }) {
    commit("SET_LOADING", true);
    commit("RESET_CURRENT_POST");
    loadPostData({ id, title }).then((postData) => {
      const post = postData[0].data.children[0].data;
      commit("SET_LOADING", false);
      commit("SET_POST", post);
    });
  },
  updateCurrentSortingOpt({ commit }, newSortingOpt) {
    commit("UPDATE_SORTING_OPTION", newSortingOpt);
  },
  addPage({ commit }) {
    commit("ADD_PAGE");
  },
};

// mutations
const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SORT_POSTS(state, param) {
    const postsArr = state.posts;
    const sortedPosts = customSortDescending(postsArr, param);
    state.posts = sortedPosts;
  },
  SET_POST(state, post) {
    state.post = post;
  },
  RESET_CURRENT_POST(state) {
    state.post = null;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  UPDATE_SORTING_OPTION(state, newSortingOpt) {
    state.currentSortingOption = newSortingOpt;
  },
  ADD_PAGE(state) {
    state.page += 1;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};