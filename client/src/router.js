import { createRouter, createWebHistory } from "vue-router";

import home from "./modules/home/router.js";
import about from "./modules/about/router.js";
import images from "./modules/images/router.js";
import contact from "./modules/contact/router.js";
import admin from "./modules/admin/router.js";

export default createRouter({
  history: createWebHistory(),
  routes: [
    home,
    about,
    images,
    contact,
    admin,
    { path: "/:path(.*)*", redirect: "/" },
  ],
});
