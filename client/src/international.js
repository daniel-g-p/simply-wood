import fr from "./locales/fr.js";
import nl from "./locales/nl.js";
import de from "./locales/de.js";
import en from "./locales/en.js";

const data = { fr, nl, de, en };

export default (language, section, key) => {
  const languageData = data[language];
  const sectionData = languageData[section];
  const keyData = sectionData[key];
  return keyData;
};
