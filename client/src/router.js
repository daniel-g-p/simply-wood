import { createRouter, createWebHistory } from "vue-router";

import home from "./modules/home/router.js";
import about from "./modules/about/router.js";

export default createRouter({
  history: createWebHistory(),
  routes: [home, about],
});
