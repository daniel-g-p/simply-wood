import { createRouter, createWebHistory } from "vue-router";

import homeModule from "./modules/home/router.js";

export default createRouter({
  history: createWebHistory(),
  routes: [homeModule],
});
