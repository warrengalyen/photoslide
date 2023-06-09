import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import store from '~/store';
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

// check modal element
if (!document.getElementById('modal'))
{
  let element = document.createElement('div');
  element.setAttribute('id', 'modal');
  document.body.append(element);
}

// initial app and mount
const app  = createApp(App)
  .use(store)
  .use(i18n)
  .mount('#app');
