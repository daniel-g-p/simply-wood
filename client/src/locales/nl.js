export default {
  home: {
    text: "Welkom bij Simply Wood, wat kunnen wij voor u doen?",
    route: { label: "Home", path: "", routeName: "nlHome" },
    nav: [
      { label: "Over ons", path: "over-ons", routeName: "nlAbout" },
      { label: "Onze creaties", path: "onze-creaties", routeName: "nlImages" },
      // { label: "Meningen", path: "meningen", routeName: "nlReviews" },
      { label: "Contact", path: "contact", routeName: "nlContact" },
    ],
  },
  about: {
    title: "Wie zijn wij?",
    description:
      "Wij zijn een ambachtelijk en traditioneel bedrijf, dat op maat gemaakte meubelen ontwerpt en vervaardigt, zoals kleedkamers, kleerkasten, kasten, keukens, zoldermeubelen... Gewaardeerd voor ons gevoel voor esthetiek en volumes gecombineerd met een meesterlijke know-how.",
    features: [
      {
        title: "Altijd tot uw dienst",
        text: "Elk project wordt geconceptualiseerd en benaderd in voortdurende dialoog met u.",
      },
      {
        title: "Intern vervaardigd",
        text: "Zowel het ontwerp en de fabricage als de uitvoering worden door ons gedaan.",
      },
      {
        title: "Maatwerkoplossing",
        text: "Voor een gericht project en een oplossing op maat begeleiden wij u in uw keuzes.",
      },
    ],
  },
  images: {
    title: "Onze op maat gesnedene creaties",
    description: "Lorem ipsum dolor sit amet.",
  },
  contact: {
    title: "Contact",
    description:
      "Heb je nog vragen? Stuur ons hieronder een bericht en wij nemen zo spoedig mogelijk contact met u op.",
    fields: {
      formTitle: "Contactformulier",
      firstName: "Voornam",
      lastName: "Familiennaam",
      zipCode: "Postcode",
      phone: "Telefoonnummer",
      email: "Mailadres",
      subject: "Onderwerp",
      message: "Bericht",
      button: "Verzenden",
    },
    success:
      "Dank u voor uw bericht, wij nemen zo spoedig mogelijk contact met u op!",
    error: "Uw bericht kon niet worden afgeleverd, probeer het later nog eens.",
  },
};
