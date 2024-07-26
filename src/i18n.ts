import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translate_en from './translations/en.json';

export interface Language {
    label: string,
    shortCode: string,
    direction: 'ltr' | 'rtl'
}

export const LANGUAGES: Language[] = [{label: 'English', shortCode: 'en', direction: 'ltr'}]

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: translate_en
        }
    }
})

export default i18n;
