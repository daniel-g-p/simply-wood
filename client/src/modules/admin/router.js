export default {
  path: "/administration",
  component: () => import("./AdminModule.vue"),
  beforeEnter: (to, from, next) => {
    const request = {
      url: `${process.env.VUE_APP_API}/users/login`,
      options: {
        credentials: "include",
      },
    };
    fetch(request.url, request.options)
      .then((res) => res.json())
      .then((res) => {
        if (to.name === "login") {
          if (res.ok) {
            next({ name: "adminImages" });
          } else {
            next();
          }
        } else {
          if (res.ok) {
            next();
          } else {
            next({ name: "login" });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
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
    {
      path: "images",
      name: "adminImages",
      component: () => import("./views/ImagesAdminPage.vue"),
    },
    {
      path: "utilisateur",
      name: "user",
      component: () => import("./views/ProfileAdminPage.vue"),
    },
  ],
};
