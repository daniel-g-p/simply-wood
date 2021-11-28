import fr from "./data/fr.js";
import nl from "./data/nl.js";
import de from "./data/de.js";
import en from "./data/en.js";

const data = { fr, nl, de, en };

export default (language, section, key) => {
  const languageData = data[language];
  const sectionData = languageData[section];
  const keyData = sectionData[key];
  return keyData;
};
