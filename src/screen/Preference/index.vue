<template>
  <article class="preference">
    <div class="preference__wrap">
      <Side
        :mode="state.tab"
        class="preference__side"
        @click-menu="onChangeTab"/>
      <form class="preference__body" @submit="onSubmit">
        <header class="preference-header">
          <div class="preference-header__body">
            <h2>{{state.computedHeaderContent.title}}</h2>
            <p>{{state.computedHeaderContent.description}}</p>
          </div>
          <nav class="preference-header__nav">
            <button
              type="submit"
              title="Submit"
              @click="onSubmit">
              <Icon icon-name="check"/>
            </button>
            <button
              type="button"
              title="Close"
              @click="onClose">
              <Icon icon-name="x"/>
            </button>
          </nav>
        </header>
        <div class="preference__content">
          <component
            :is="state.computedContentComponent"
            :structure="state.structure[state.tab]"
            @update="onUpdateFields"/>
        </div>
      </form>
    </div>
  </article>
</template>

<script>
import { defineComponent, defineAsyncComponent, reactive, computed, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import * as object from '~/libs/object';
import * as local from '~/libs/local';
import Icon from '~/components/Icon';
import Side from './Side';
export default defineComponent({
  name: 'preference',
  components: {
    Icon,
    Side,
  },
  setup()
  {
    const store = useStore();
    let state = reactive({
      tab: 'style', // general,slides,style,data,keyboard
      structure: object.convertPureObject(store.state.preference),
      computedContentComponent: computed(() => {
        switch (state.tab)
        {
          case 'general':
          default:
            return defineAsyncComponent(() => import('./General'));
          case 'style':
            return defineAsyncComponent(() => import('./Style'));
          case 'slides':
            return defineAsyncComponent(() => import('./Slide'));
          case 'data':
            return defineAsyncComponent(() => import('./Data'));
          case 'keyboard':
            return defineAsyncComponent(() => import('./Keyboard'));
        }
      }),
      computedHeaderContent: computed(() => {
        switch (state.tab)
        {
          case 'general':
          default:
            return {
              title: 'General',
              description: 'set basic items',
            };
          case 'style':
            return {
              title: 'Style',
              description: 'sets the parts displayed on the screen',
            };
          case 'slide':
            return {
              title: 'Slide',
              description: 'set the parts related to the slide',
            }
          case 'data':
            return {
              title: 'Data',
              description: 'manage slide data',
            };
          case 'keyboard':
            return {
              title: 'Keyboard',
              description: 'settings related to keyboard shortcuts',
            };
        }
      }),
    });
    // methods
    function onChangeTab(name)
    {
      state.tab = name;
    }
    function onSubmit(e)
    {
      e.preventDefault();
      console.log('onSubmit', state.structure);
    }
    function onClose()
    {
      store.commit('changeMode', null);
    }
    function onUpdateFields(structure)
    {
      state.structure[state.tab] = structure;
    }

    // lifecycles
    onMounted(() => {
      if (local.slides) local.slides.pause(true);
      store.commit('useKeyboardEvent', false);
    });
    onUnmounted(() => {
      if (local.slides) local.slides.pause(false);
      store.commit('useKeyboardEvent', true);
    });
    return {
      state,
      onChangeTab,
      onSubmit,
      onClose,
      onUpdateFields,
    };
  },
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
