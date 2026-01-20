import 'i18next'
import pt_br from '../locales/pt_br.json'

declare module 'i18next' {
    interface CustomTypOptions {
        defaultNS: 'translation';
        resources: {
            translation: typeof pt_br;
        };
    }
}