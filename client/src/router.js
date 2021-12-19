import { createRouter, createWebHistory } from "vue-router";

import home from "./modules/home/router.js";
import about from "./modules/about/router.js";
import images from "./modules/images/router.js";
// import reviews from "./modules/reviews/router.js";
import contact from "./modules/contact/router.js";
import admin from "./modules/admin/router.js";

export default createRouter({
  history: createWebHistory(),
  routes: [
    home,
    about,
    images,
    // reviews,
    contact,
    admin,
    { path: "/:path(.*)*", redirect: "/" },
  ],
});
