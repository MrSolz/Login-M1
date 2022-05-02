import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./en.json"
import vi from "./vi.json"
i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        resources: {
            en: {
                translation: en,
            },
            vi: {
                translation: vi,
            },
        },
        lng: 'vi',
        fallbackLng: 'vi',
    });