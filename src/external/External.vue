<template>
  <div class="external-body">
    <Slideshow
      :tree="state.tree"/>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import Slideshow from '~/screen/App';
export default defineComponent({
  name: 'external-component',
  components: {
    Slideshow,
  },
  setup()
  {
    let state = reactive({
      tree: {
        default: 'https://raw.githubusercontent.com/warrengalyen/photoslide/master/resource/example/slides.json',
        foo: [
          {
            src: 'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1217&q=70',
            thumbnail: 'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=70',
            title: 'Way to Braunarlspitze',
            description: 'Published on April 5, 2021',
          },
          {
            src: 'https://images.unsplash.com/photo-1620983379290-71e02d8ca563?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=70',
            thumbnail: 'https://images.unsplash.com/photo-1620983379290-71e02d8ca563?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=70',
            title: 'Grossglockner high alpine road.',
            description: 'Published on May 14, 2021',
          },
          {
            src: 'https://images.unsplash.com/photo-1570309977742-90c800236330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=70',
            thumbnail: 'https://images.unsplash.com/photo-1570309977742-90c800236330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=70',
            title: 'Nothing's by accident and everything happens for a reason.',
            description: 'Published on October 6, 2019',
          },
          {
            src: 'https://images.unsplash.com/photo-1533251107558-25299f5a3893?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=70',
            thumbnail: 'https://images.unsplash.com/photo-1533251107558-25299f5a3893?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=70',
            title: 'Gravitation',
            description: 'Published on August 3, 2018',
          },
          {
            src: 'https://images.unsplash.com/photo-1602829249794-819fbfcb3ac4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=70',
            thumbnail: 'https://images.unsplash.com/photo-1602829249794-819fbfcb3ac4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=70',
            title: 'mirror lake in the morning',
            description: 'Published on October 16, 2020',
          },
        ],
      }
    });
    return {
      state,
    };
  },
});
</script>
