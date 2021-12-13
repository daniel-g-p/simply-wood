export default {
  namespaced: true,
  state() {
    return {
      categories: [],
      activeCategory: "",
      loaderActive: false,
      admin: {
        name: "",
        email: "",
      },
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
    admin(state) {
      return state.admin;
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
    setAdmin(state, payload) {
      const { name, email } = payload;
      state.admin.name = name;
      state.admin.email = email;
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
