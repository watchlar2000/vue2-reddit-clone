const state = () => ({
  isDark: false,
});

const getters = {};

const actions = {
  toggleDarkMode({ commit }) {
    commit("TOGGLE_MODE");
  },
};

const mutations = {
  TOGGLE_MODE: (state) => {
    state.isDark = !state.isDark;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
