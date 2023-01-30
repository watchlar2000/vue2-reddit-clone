import { loadPosts, loadPostData } from "@/api";
// import { sortPosts } from "@/utils";

const SORTING_OPTIONS = [
  {
    key: "default",
    param: "created",
    value: "Date posted",
  },
  {
    key: "most_upvoted",
    param: "ups",
    value: "Most upvoted",
  },
  {
    key: "most_commented",
    param: "num_comments",
    value: "Most Commented",
  },
];

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
  isLoading: (state) => {
    return state.loading;
  },
  sortingOptions: (state) => state.sortingOptions,
  currentSortingOption: (state) => {
    return state.currentSortingOption;
  },
  page: (state) => state.page,
};

// actions
const actions = {
  async getAllPosts({ commit, state }, userSortingParam = null) {
    commit("SET_LOADING", true);

    if (userSortingParam === null) {
      loadPosts().then((postsData) => {
        const sortingParam = state.currentSortingOption.param;
        const posts = postsData.data.children.sort(
          (a, b) => b.data[sortingParam] - a.data[sortingParam]
        );

        commit("SET_POSTS", posts);
        commit("SET_LOADING", false);
      });
      return;
    }

    commit("SORT_POSTS", userSortingParam);
    commit("SET_LOADING", false);
  },
  async getPost({ commit, state }, { id, title }) {
    commit("SET_LOADING", true);

    if (state.post && state.post.id === id) {
      return;
    }

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
    const sortedPosts = state.posts.sort(
      (a, b) => b.data[param] - a.data[param]
    );
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
