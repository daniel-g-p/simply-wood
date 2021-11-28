export default {
  home: {
    text: "Bienvenue chez Simply Wood, que pouvons-nous faire pour vous?",
    route: { path: "/", routeName: "frHome" },
    nav: [
      { label: "A propos", route: "a-propos", routeName: "frAbout" },
      { label: "Nos créations", route: "creations", routeName: "frImages" },
      { label: "Avis", route: "avis", routeName: "frReviews" },
      { label: "Contact", route: "contact", routeName: "frContact" },
    ],
  },
};
