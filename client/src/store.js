import { createStore } from "vuex";

import language from "./modules/home/store.js";
import admin from "./modules/admin/store.js";
import images from "./modules/images/store.js";

export default createStore({
  modules: {
    language,
    admin,
    images,
  },
});
