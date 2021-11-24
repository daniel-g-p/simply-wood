export default {
  path: "/",
  component: () => import("./HomeModule.vue"),
  children: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/HomePage.vue"),
    },
  ],
};
