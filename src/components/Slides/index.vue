<template>
  <article
    :class="[
    'slideshow-slides',
    state.swipeMove && 'swipe-move',
    ]"
    @touchstart="onStart"
    @touchmove="onMove"
    @touchend="onEnd"
    @mousedown="onStart"
    @mousemove="onMove"
    @mouseup="onEnd"
    @mouseleave="onTouchCancel"
    @mouseenter="onMouseEnter"
    @contextmenu="onContextMenu">
    <Images
      ref="images"
    :initial-active="$store.state.activeSlide"
      :items="state.computedImages"
      :animation-type="$store.state.preference.slides.animationType"
      :duration="$store.state.preference.slides.animationSpeed"
      :image-type="$store.state.preference.style.imageType"
      :image-size="$store.state.preference.style.imageScale"
      :loop="$store.state.preference.slides.loop"
      :move-pos="state.swipePos"
      @animation-control="onAnimationControl"
      @change-active="onChangeActive"/>
    <Caption
      v-if="state.computedVisibleCaption"
      :active="$store.state.activeSlide"
      :title="state.computedCaption.title"
      :description="state.computedCaption.description"
      :animation-type="$store.state.preference.slides.captionAnimationType"
      :animation-speed="$store.state.preference.slides.captionAnimationSpeed"
      :position="$store.state.preference.style.captionPosition"
      :scale="$store.state.preference.style.captionScale"/>
    <Controller
      v-if="state.computedVisibleController"
      :disabled="state.animated"
      :show-prev="state.computedShowPrevButton"
      :show-next="state.computedShowNextButton"
    class="slideshow-slides__controller"
      @click-prev="prev"
      @click-next="next"/>
    <Paginate
      v-if="state.computedVisiblePaginate"
      :total="state.computedImages.length"
      :current="$store.state.activeSlide"
      class="slideshow-slides__paginate"/>
  </article>
</template>

<script>
import { defineComponent, reactive, computed, onMounted, onUnmounted, watch, ref } from 'vue';
import { useStore } from 'vuex';
import * as number from '~/libs/number';
import Images from './Images';
import Caption from './Caption';
import Paginate from './Paginate';
import Controller from './Controller';

export default defineComponent({
  name: 'Slides',
  components: {
    Images,
    Caption,
    Paginate,
    Controller,
  },
  setup()
  {
    const store = useStore();
    const images = ref(null);
    let state = reactive({
      active: store.state.activeSlide === undefined ? store.state.preference.slides.initialNumber : store.state.activeSlide,
      animated: false,
      swipePos: undefined,
      swipeMove: false,
      computedImages: computed(() => {
        return store.state.slides.map(item => (item));
      }),
      computedShowPrevButton: computed(() => {
        if (store.state.preference.slides.loop) return true;
        return 0 < store.state.activeSlide;
      }),
      computedShowNextButton: computed(() => {
        if (store.state.preference.slides.loop) return true;
        return state.computedImages.length - 1 > store.state.activeSlide;
      }),
      computedCaption: computed(() => {
        const item = state.computedImages[store.state.activeSlide];
        return {
          title: item.title,
          description: item.description,
        };
      }),
      computedVisibleCaption: computed(() => {
        const { hud, visibleHudContents } = store.state.preference.general;
        return hud && visibleHudContents.caption;
      }),
      computedVisibleController: computed(() => {
        const { hud, visibleHudContents } = store.state.preference.general;
        if (state.computedImages.length <= 1) return false;
        return hud && visibleHudContents.controller;
      }),
      computedVisiblePaginate: computed(() => {
        const { hud, visibleHudContents } = store.state.preference.general;
        return hud && visibleHudContents.paginate;
      }),
    });
    let swipeMeta = null; // It contains the necessary information when swiping the slide.
    let autoplayTimer = undefined; // used to hold autoplay settimeout values
    let autoplayPause = false; // value used when autoplay is paused
    let mounted = false;
    let touched = false;

    // check active number
    let active = store.state.preference.slides.initialNumber;
    onChangeActive(!!checkActive(active) ? active : 0);

    // methods
    function onAnimationControl(sw)
    {
      state.animated = sw;
      if (!sw)
      {
        // with autoplay
        let autoplay = store.state.preference.slides.autoplay && !autoplayPause;
        if (autoplay) runAutoplay(true);
      }
    }
    function onChangeActive(n)
    {
      store.dispatch('changeActiveSlide', n);

    }
    function checkActive(n)
    {
      return !!state.computedImages[n];
    }
    function onStart(e)
    {
      e.stopPropagation();
      if (e.touches) touched = true;
      if (!e.touches && touched) return;
      if (e.touches && e.touches.length > 1) e.preventDefault();
      if (state.animated) return;
      if (!store.state.preference.slides.swipe) return;
      if (store.state.preference.slides.animationType !== 'horizontal') return;
      if (state.computedImages.length <= 2) return;
      runAutoplay(false);
      swipeMeta = {
        dist: 0,
        startX: (e.touches && e.touches[0]) ? Math.floor(e.touches[0].clientX) : (e.clientX || e.pageX),
        startTime: new Date().getTime(),
      };
      state.swipeMove = true;
    }
    function onMove(e)
    {
      e.stopPropagation();
      if (!e.touches && touched) return;
      if (state.animated || !state.swipeMove) return;
      if (state.computedImages.length <= 2) return;
      swipeMeta.moveX = (e.touches && e.touches[0]) ? Math.floor(e.touches[0].clientX) : (e.clientX || e.pageX);
      const screenWidth = window.innerWidth;
      const dist = swipeMeta.moveX - swipeMeta.startX;
      state.swipePos = (dist / screenWidth * 100) + (0 - (100 * store.state.activeSlide));
    }
    function onEnd(e)
    {
      e.stopPropagation();

      function action(dir)
      {
        if (dir) next();
        else prev();
      }
      function cancel()
      {
        images.value.cancel();
      }

      if (!e.touches && touched) return;
      if (state.animated || !state.swipeMove) return;
      if (e.touches && e.touches.length > 0) return;
      if (state.computedImages.length <= 2) return;

      const screenWidth = window.innerWidth;
      swipeMeta.endX = (e.changedTouches && e.changedTouches[0]) ? Math.floor(e.changedTouches[0].clientX) : (e.clientX || e.pageX);
      let dir = swipeMeta.startX > swipeMeta.endX; // next is true
      let elapsedTime = new Date().getTime() - swipeMeta.startTime;
      let distPos = swipeMeta.endX - swipeMeta.startX;
      let percent = Math.abs(distPos) / screenWidth * 100;

      // unset values
      state.swipePos = undefined;
      state.swipeMove = false;
      swipeMeta = undefined;

      // stop if short enough to click
      if (elapsedTime < 60 || percent < 1)
      {
        runAutoplay(true);
        // toggle hud
        if (store.state.preference.general.clickVisibleHud && !e.target.closest('.controller'))
        {
          store.dispatch('changeHud');
        }
        return;
      }

      // play
      if (elapsedTime > 300)
      {
        // long touch
        if (percent > 30) action(dir);
        else cancel();
      }
      else
      {
        // short touch
        if (percent > 5) action(dir);
        else cancel();
      }
    }
    function onTouchCancel(e)
    {
      e.stopPropagation();
      if (state.swipeMove) images.value.cancel();
      state.swipePos = undefined;
      state.swipeMove = false;
      if (store.state.preference.slides.autoplay && store.state.preference.slides.autoplayPauseOnHover)
      {
        pause(false);
      }
    }
    function onMouseEnter(e)
    {
      if (store.state.preference.slides.autoplay && store.state.preference.slides.autoplayPauseOnHover)
      {
        pause(true);
      }
    }
    function onContextMenu()
    {
      state.swipePos = undefined;
      state.swipeMove = false;
    }
    function runAutoplay(sw)
    {
      if (!mounted) return;
      if (sw && !autoplayTimer)
      {
        if (!store.state.preference.slides.autoplay) return;
        const delay = store.state.preference.slides.autoplayDelay;
        const dir = store.state.preference.slides.autoplayDirection;
        const loop = store.state.preference.slides.loop;
        const side = isActiveSide(dir);
        if (!loop && (!loop && side)) return;
        autoplayTimer = setTimeout(() => {
          if (!dir) prev();
          else next();
        }, delay);
      }
      else if (autoplayTimer)
      {
        clearTimeout(autoplayTimer);
        autoplayTimer = undefined;
      }
    }
    function isActiveSide(dir)
    {
      if (!(state.computedImages && state.computedImages.length > 0)) return;
      return (!dir && store.state.activeSlide === 0) ||
        (dir && store.state.activeSlide >= state.computedImages.length - 1);
    }
    // public methods
    function change(n, userAnimationType = undefined)
    {
      if (state.animated || !checkActive(n) || !images.value) return;
      onChangeActive(n);
      runAutoplay(false);
      images.value.play(n, userAnimationType);
    }
    function prev()
    {
      if (!(state.computedImages && state.computedImages.length > 0)) return;
      let n = number.move(
        state.computedImages.length,
        store.state.activeSlide - 1,
        store.state.preference.slides.loop
      );
      change(n);
    }
    function next()
    {
      if (!(state.computedImages && state.computedImages.length > 0)) return;
      let n = number.move(
        state.computedImages.length,
        store.state.activeSlide + 1,
        store.state.preference.slides.loop
      );
      change(n);
    }
    function autoplay(sw = undefined)
    {
      store.dispatch('toggleAutoplay', sw);
    }
    function pause(sw = undefined)
    {
      if (sw === undefined) return;
      if (!store.state.preference.slides.autoplay) return;
      autoplayPause = sw;
      if (!sw || (sw && !state.animated)) runAutoplay(!sw);
    }

    // lifecycles
    onMounted(() => {
      mounted = true;
      if (store.state.preference.slides.autoplay) runAutoplay(true);
    });
    onUnmounted(() => {
      mounted = false;
      if (autoplayTimer)
      {
        clearTimeout(autoplayTimer);
        autoplayTimer = undefined;
      }
    });

    // watch
    watch(() => store.state.preference.slides.autoplay, sw => runAutoplay(sw));

    return {
      state,
      images,
      // methods
      onAnimationControl,
      onChangeActive,
      onStart,
      onMove,
      onEnd,
      onTouchCancel,
      onMouseEnter,
      onContextMenu,
      // public methods
      change,
      prev,
      next,
      autoplay,
      pause,
    };
  },
});
</script>

<style src="./index.scss" lang="scss"></style>
