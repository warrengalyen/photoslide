<template>
  <LoadingIntro v-if="state.loading"/>
  <Container v-else/>
</template>

<script>
import { defineComponent, reactive, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import * as util from '~/libs/util';
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
    const store = useStore();
    let state = reactive({
      loading: true,
      dev: process.env.NODE_ENV === 'development',
    });

    // method
    function updateTheme()
    {
      // TODO: dark mode related part work
      console.log('update theme');
    }
    function start()
    {
      state.loading = false;
    }
    function stop()
    {
      state.loading = true;
    }
    async function restart()
    {
      stop();
      // TODO: I arbitrarily delayed it by 3 seconds, but I need to find a reasonable delay time.
      await util.sleep(3000);
      start();
    }

    // watch
    // watch(() => store.state.preference, () => {
    //   console.log('updated preference');
    // });

    // lifecycles
    onMounted(async () => {
      await util.sleep(500);
      // TODO: restore the values from storage to the vuex area
      // TODO: Otherwise, json values in the server are retrieved and restored to the vuex area.
      state.loading = false;
    });

    return {
      state,
      restart,
      start,
      stop,
    };
  }
});
</script>