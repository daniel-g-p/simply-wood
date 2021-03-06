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
      state.activeLanguage = payload;
    },
  },
  actions: {
    setActiveLanguage(context, payload) {
      window.localStorage.setItem("lang", payload);
      context.commit("setActiveLanguage", payload);
    },
  },
};
