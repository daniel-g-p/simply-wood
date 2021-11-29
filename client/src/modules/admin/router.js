export default {
  path: "/administration",
  component: () => import("./AdminModule.vue"),
  children: [
    {
      path: "",
      redirect: { name: "login" },
    },
    {
      path: "login",
      name: "login",
      component: () => import("./views/LoginPage.vue"),
    },
    { path: "/:path(.*)*", redirect: { name: "loginHome" } },
  ],
};
