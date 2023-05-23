import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
// assets
import store from '~/store';
import * as util from '~/libs/util';
import * as local from '~/libs/local';
// components
import App from '~/screen/App';
// style
import '~/scss/main.scss';

// initial i18n
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: require('~/i18n/en.json'),
  },
});

// initial custom event
util.initCustomEvent();

// initial app and mount
const app  = createApp(App)
  .use(store)
  .use(i18n)
  .mount('#app');

// setup local
local.setup(app);
