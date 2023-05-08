<template>
  <div class="slideshow">
    <Slides
      v-if="state.existSlideItem"
      ref="slides"
      class="slideshow__slides"/>
    <p v-else>not slide item</p>
    <Thumbnail
      v-if="state.computedMode === 'thumbnail'"
      class="slideshow__thumbnail"/>
    <Navigation
      class="slideshow__navigation"/>
    <teleport to="#preference">
      <Preference
        v-if="state.computedMode === 'preference'"
        class="slideshow__preference"/>
    </teleport>
  </div>
</template>

<script>
import { defineComponent, reactive, computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import * as local from '~/libs/local';
import Thumbnail from '~/screen/Thumbnail';
import Preference from '~/screen/Preference';
import Navigation from '~/components/Navigation';
import Slides from '~/components/Slides';
export default defineComponent({
  name: 'Container',
  components: {
    Slides,
    Thumbnail,
    Navigation,
    Preference,
  },
  setup()
  {
    const store = useStore();
    let state = reactive({
      computedMode: computed(() => {
        switch (store.state.mode)
        {
          case 'preference':
          case 'thumbnail':
            return store.state.mode;
          default:
            return null;
        }
      }),
      existSlideItem: store.state.slides.length > 0,
    });
    const slides = ref(null);
    // lifecycles
    onMounted(() => {
      local.setupSlides(slides.value);
    });

    return {
      state,
      slides,
    };
  },
});
</script>

<style lang="scss">
@import '../../scss/mixins';
.slideshow {
  &__slides {
    position: relative;
  }
  &__thumbnail {
    position: fixed;
    z-index: 3;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  &__navigation {
    position: fixed;
    z-index: 4;
    right: 0;
    top: 0;
  }
  &__preference {
    position: fixed;
    z-index: 5;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  @include responsive(desktop) {
    &__navigation {
      right: 30px;
      top: 30px;
    }
  }
  @include dark-mode() {}
}
</style>