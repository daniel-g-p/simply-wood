export default {
  namespaced: true,
  state() {
    return {
      activeLanguage: "fr",
    };
  },
  getters: {
    activeLanguage(state) {
      return state.activeLanguage;
    },
  },
  mutations: {
    setActiveLanguage(state, payload) {
      state.language = payload;
    },
  },
  actions: {
    setactiveLanguage(context, payload) {
      context.commit("setActiveLanguage", payload);
    },
  },
};
