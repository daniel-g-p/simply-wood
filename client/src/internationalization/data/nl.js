export default {
  home: {
    text: "Welkom bij Simply Wood, wat kunnen wij voor u doen?",
    route: { path: "/", routeName: "nlHome" },
    nav: [
      { label: "Over ons", route: "over-ons", routeName: "nlAbout" },
      { label: "Onze creaties", route: "onze-creaties", routeName: "nlImages" },
      { label: "Meningen", route: "meningen", routeName: "nlReviews" },
      { label: "Contact", route: "contact", routeName: "nlContact" },
    ],
  },
};
