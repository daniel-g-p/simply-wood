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
    updateMainImage(state, payload) {
      const { categoryId, imageUrl } = payload;
      const index = state.categories.findIndex((category) => {
        return category._id === categoryId;
      });
      state.categories[index].mainImage = imageUrl;
    },
  },
  actions: {
    setCategories(context) {
      const request = {
        url: `${process.env.VUE_APP_API}/images/categories`,
        options: { credentials: "include" },
      };
      fetch(request.url, request.options)
        .then((res) => res.json())
        .then((res) => {
          if (res.categories) {
            console.log(res.categories);
            context.commit("setCategories", res.categories);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setActiveCategory(context, payload) {
      context.commit("setActiveCategory", payload);
    },
    toggleLoader(context) {
      context.commit("toggleLoader");
    },
    updateMainImage(context, payload) {
      context.commit("updateMainImage", payload);
    },
  },
};
