import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../public/localization/en.json";
import ru from "../public/localization/ru.json";
import uz from "../public/localization/uz.json";

 
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    uz: { translation: uz },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});
 
export default i18n;