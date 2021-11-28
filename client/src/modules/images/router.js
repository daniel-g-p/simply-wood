import international from "../../international.js";

import store from "../../store.js";

const router = {
  path: "/",
  component: () => import("./ImagesModule.vue"),
  beforeEnter(to, _from, next) {
    const lang = to.fullPath.split("/")[1];
    if (lang) {
      store.dispatch("language/setActiveLanguage", lang);
    }
    next();
  },
  children: [],
};

const getRouteData = () => {
  const languages = ["fr", "nl", "de", "en"];
  const data = {};
  for (let language of languages) {
    const routes = international(language, "home", "nav");
    data[language] = routes;
  }
  return data;
};

const internationalRoute = (
  routerObject,
  routeData,
  routeBaseName,
  componentPath
) => {
  const languages = Object.keys(routeData);
  for (let language of languages) {
    const route = routeData[language].find((route) => {
      return route.routeName === `${language}${routeBaseName}`;
    });
    routerObject.children.push({
      path: `${language}/${route.path}`,
      name: `${route.routeName}`,
      component: () => import(`${componentPath}`),
    });
  }
};

internationalRoute(router, getRouteData(), "Images", "./views/ImagesPage.vue");

export default router;
