import { createStore } from "vuex";

import language from "./modules/home/router.js";

export default createStore({
  modules: {
    language,
  },
});
