export default {
  namespaced: true,
  state() {
    return {
      categories: [],
      activeCategory: "",
      loaderActive: false,
    };
  },
  getters: {
    categories(state) {
      return state.categories;
    },
    activeCategory(state) {
      return state.activeCategory;
    },
    loaderActive(state) {
      return state.loaderActive;
    },
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload;
    },
    setActiveCategory(state, payload) {
      state.activeCategory = payload;
    },
    toggleLoader(state) {
      state.loaderActive = !state.loaderActive;
    },
  },
  actions: {
    setCategories(context, payload) {
      context.commit("setCategories", payload);
    },
    setActiveCategory(context, payload) {
      context.commit("setActiveCategory", payload);
    },
    toggleLoader(context) {
      context.commit("toggleLoader");
    },
  },
};
