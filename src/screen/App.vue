<template>
  <LoadingIntro v-if="state.loading"/>
  <Container v-else/>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue';
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
    let state = reactive({
      loading: true,
      dev: process.env.NODE_ENV === 'development',
    });
    // method
    function updateTheme()
    {
      // TODO: Dark mode related part work
      console.log('update theme');
    }
    async function refresh()
    {
      state.loading = true;
      // TODO: I arbitrarily delayed it by 3 seconds, but I need to find a reasonable delay time.
      await util.sleep(3000);
      state.loading = false;
    }

    // watch
    // watch(() => store.state.preference.theme, updateTheme);
    // lifecycles
    onMounted(async () => {
      await util.sleep(500);
      // TODO: Restore the values from storage to the vuex area.
      // TODO: Otherwise, json values in the server are retrieved and restored to the vuex area.
      state.loading = false;
    });
    return {
      state,
      refresh,
    };
  }
});
</script>

