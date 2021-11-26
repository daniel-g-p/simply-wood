import { createStore } from "vuex";

import language from "./modules/home/store.js";

export default createStore({
  modules: {
    language,
  },
});
