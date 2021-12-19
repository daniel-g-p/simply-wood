export default {
  home: {
    text: "Willkommen bei Simply Wood, wie können wir Ihnen helfen?",
    route: { label: "Startseite", path: "", routeName: "deHome" },
    nav: [
      { label: "Über Uns", path: "ueber-uns", routeName: "deAbout" },
      { label: "Unsere Dienste", path: "dienste", routeName: "deImages" },
      // { label: "Rezensionen", path: "rezensionen", routeName: "deReviews" },
      { label: "Kontakt", path: "kontakt", routeName: "deContact" },
    ],
  },
  about: {
    title: "Wer sind wir?",
    description:
      "Wir sind ein traditionelles Handwerksunternehmen, das sich der maßgeschneiderten Möbelanfertigung widmet. Wir bieten Ankleidezimmer, Kleiderschränke, Wandschränke, Küchen, Dachschrägenmöbel, und vieles mehr.",
    features: [
      {
        title: "Jederzeit für Sie da",
        text: "Jedes Projekt wird in konstantem Austausch mit Ihnen konzeptualisiert und verarbeitet.",
      },
      {
        title: "Einzigartige Handfertigung",
        text: "Das Design, die Herstellung, wie auch die Umsetzung werden bei uns im Hause durchgeführt.",
      },
      {
        title: "Personalisierte Dienstleistung",
        text: "Für ein zielgerichtetes Projekt und eine maßgeschneiderte Lösung werden wir Sie bei Ihren Entscheidungen begleiten.",
      },
    ],
  },
  images: {
    title: "Unsere Werke",
    description: "Lorem ipsum dolor sit amet.",
  },
  contact: {
    title: "Kontakt",
    description:
      "Haben Sie noch weitere Fragen? Setzen Sie sich gerne mit uns in Kontaktm, wir werden uns so schnell wie möglich bei Ihnen.",
    fields: {
      formTitle: "Kontaktformular",
      firstName: "Vorname",
      lastName: "Nachname",
      zipCode: "Postleitzahl",
      phone: "Telefonnummer",
      email: "Emailadresse",
      subject: "Betreff",
      message: "Nachricht",
      button: "Senden",
    },
  },
};
