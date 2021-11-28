export default {
  home: {
    text: "Welcome to Simply Wood, what can we do for you?",
    route: { label: "Home", path: "", routeName: "enHome" },
    nav: [
      { label: "About Us", path: "about-us", routeName: "enAbout" },
      { label: "Our creations", path: "creations", routeName: "enImages" },
      { label: "Reviews", path: "reviews", routeName: "enReviews" },
      { label: "Contact", path: "contact", routeName: "enContact" },
    ],
  },
  about: {
    title: "Who are we?",
    description:
      "We are an artisanal and traditional company, designing and manufacturing custom-made furniture such as dressing rooms, wardrobes, cupboards, kitchens, attic furniture, the list goes on. We take pride in our sense for aesthetics paired with masterful technical know-how.",
    features: [
      {
        title: "Always at your service",
        text: "Every project is conceptualised and carried out in constant dialogue with you.",
      },
      {
        title: "Crafted entirely in-house",
        text: "The design and manufacture as well as the implementation are done entirely in-house by us.",
      },
      {
        title: "Tailor-made solution",
        text: "For a targeted project and a tailor-made solution we will guide you in your choices.",
      },
    ],
  },
};
