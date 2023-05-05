<template>
  <LoadingIntro v-if="state.loading"/>
  <Container v-else/>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import * as util from '~/libs/util';
import Container from '~/screen/Container/index.vue';
import LoadingIntro from '~/components/Loading/Intro.vue';
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
      // TODO: Dark mode related part work
      console.log('update theme');
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
    };
  }
});
</script>

