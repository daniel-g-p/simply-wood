export default {
  home: {
    text: "Bienvenue chez Simply Wood, que pouvons-nous faire pour vous?",
    route: { label: "Accueil", path: "", routeName: "frHome" },
    nav: [
      { label: "A propos", path: "a-propos", routeName: "frAbout" },
      { label: "Nos créations", path: "creations", routeName: "frImages" },
      { label: "Avis", path: "avis", routeName: "frReviews" },
      { label: "Contact", path: "contact", routeName: "frContact" },
    ],
  },
  about: {
    title: "Qui sommes-nous?",
    description:
      "Nous sommes une société artisanale et traditionnelle de conception et fabrication sur mesure de mobilier tel que dressing, penderie, placard, cuisine, meuble mansardé, et plus. Appréciés pour notre sens esthétique et des volumes alliés à un savoir-faire maitrisé.",
    features: [
      {
        title: "Au service du particulier",
        text: "Tout projet est conceptualisé et abordé en dialogue constant avec vous.",
      },
      {
        title: "Interlocuteur unique",
        text: "La conception et la fabrication comme la mise en œuvre sont faites par nos soins.",
      },
      {
        title: "Solution personnalisée",
        text: "Pour un projet ciblé et une solution sur mesure nous vous guiderons dans vos choix.",
      },
    ],
  },
};
