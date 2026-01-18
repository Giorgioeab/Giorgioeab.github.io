import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import es from './locales/es.json'
import pt_br from './locales/pt_br.json'

const storedLanguage: string | null = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: en},
            es: {translation: es},
            'pt-BR': {translation: pt_br}
        },
        lng: storedLanguage || 'pt-BR',
        fallbackLng: 'en',
        supportedLngs: ['en', 'es', 'pt-BR'],
        interpolation: {
            escapeValue: false
        }
    });

    export default i18n;