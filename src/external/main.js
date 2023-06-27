import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
// assets
import store from '~/store';
// components
import External from './External';
// style
import './main.scss';

// initial i18n
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: require('~/i18n/en.json'),
  },
});

// check modal element
if (!document.getElementById('modal'))
{
  let element = document.createElement('div');
  element.setAttribute('id', 'modal');
  document.body.append(element);
}

// initial app and mount
createApp(External)
  .use(store)
  .use(i18n)
  .mount('#app');
