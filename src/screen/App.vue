<template>
  <LoadingIntro v-if="state.loading"/>
  <Container v-else/>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import * as storage from '~/libs/storage';
import { convertPureObject } from '~/libs/object';
import { sleep } from '~/libs/util';
import example from '~/example.json';
import Container from '~/screen/Container';
import LoadingIntro from '~/components/Loading/Intro';

export default defineComponent({
  name: 'App',
  components: {
    Container,
    LoadingIntro,
  },
  setup()
  {
    let store = useStore();
    const { t, locale } = useI18n({ useScope: 'global' });
    let state = reactive({
      loading: true,
      dev: process.env.NODE_ENV === 'development',
    });

    // method
    function updateTheme(color)
    {
      let theme;
      switch(color)
      {
        case 'light':
        case 'dark':
          theme = color;
          break;
        default:
          theme = 'system';
          break;
      }
      const $html = document.querySelector('html');
      $html.dataset['color'] = theme;
    }
    function start()
    {
      sleep(50).then(() => {
        state.loading = false;
      });
    }
    function stop()
    {
      state.loading = true;
    }
    function restart()
    {
      stop();
      updateTheme(store.state.preference.style.screenColor);
      locale.value = store.state.preference.general.language;
      sleep(1000).then(() => start());
    }

    // lifecycles
    onMounted(() => start());

    // get storage data
    const storagePreference = storage.get('preference');
    const storageSlides = storage.get('slides');
    if (storagePreference && storageSlides)
    {
      // recover with storage contents
      store.dispatch('changePreference', storagePreference);
      store.dispatch('changeSlides', storageSlides);
      store.dispatch('changeActiveSlide', storagePreference.slides.initialNumber);
    }
    else
    {
      // Recover to the example slides and save the data to storage.
      storage.set('preference', convertPureObject(store.state.preference));
      const slides = example;
      store.dispatch('changeSlides', slides);
      storage.set('slides', slides);
    }

    // actions
    updateTheme(store.state.preference.style.screenColor);
    locale.value = store.state.preference.general.language;

    return {
      state,
      start,
      stop,
      restart,
    };
  }
});
</script>
