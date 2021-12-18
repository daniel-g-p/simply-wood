export default {
  namespaced: true,
  state: () => {
    return {
      categories: [],
    };
  },
  getters: {
    getCategories: (state) => {
      return state.categories;
    },
  },
  mutations: {
    setCategories: (state, payload) => {
      state.categories = payload;
    },
  },
  actions: {
    fetchCategories: (context) => {
      fetch(`${process.env.VUE_APP_API}/images/categories`)
        .then((res) => res.json())
        .then((res) => {
          context.commit("setCategories", res.categories);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
