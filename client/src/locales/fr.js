export default {
  home: {
    text: "Bienvenue chez Simply Wood, que pouvons-nous faire pour vous?",
    route: { label: "Accueil", path: "", routeName: "frHome" },
    nav: [
      { label: "A propos", path: "a-propos", routeName: "frAbout" },
      { label: "Nos créations", path: "creations", routeName: "frImages" },
      // { label: "Avis", path: "avis", routeName: "frReviews" },
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
  images: {
    title: "Nos créations sur mesure",
    description: "Lorem ipsum dolor sit amet.",
  },
  contact: {
    title: "Contact",
    description:
      "Vous avez encore des questions? N’hésitez pas à nous envoyer un message ci-dessous et nous reviendrons vers vous dans les moindres délais.",
    fields: {
      formTitle: "Formulaire de contact",
      firstName: "Prénom",
      lastName: "Nom de famille",
      zipCode: "Code postal",
      phone: "Numéro de téléphone",
      email: "Adresse email",
      subject: "Sujet",
      message: "Message",
      button: "Envoyer",
    },
    success:
      "Merci beaucoup pour votre message, nous nous mettrons en contact avec vous au plus tôt!",
    error:
      "Votre message n'a pas pu être envoyé, veuillez reéssayer plus tard s'il vous plaît.",
  },
};
