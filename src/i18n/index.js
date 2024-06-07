import {createI18n} from 'vue-i18n'
import en from './en.js';
import es from './es.js';
import store from './store';

const messages = {
    en:{...en},
    es: {...es},
};

const i18n = createI18n({
    legacy: false,
    locale: store.state.locale,
    messages,
});

export default i18n;