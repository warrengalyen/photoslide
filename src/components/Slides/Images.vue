<template>
  <div
    :class="[
    'slideshow-images',
    !animationType && `slideshow-images--none`,
    animationType === 'fade' && `slideshow-images--fade`,
    animationType === 'horizontal' && `slideshow-images--horizontal`,
    styleType && `slideshow-images--${styleType}`,
    state.animated && 'animated',
  ]"
    :style="{
    '--speed-slide-animation': `${duration}ms`,
    '--image-size': imageSize,
    '--active-column': state.active,
  }"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @mousedown="onTouchStart"
    @mousemove="onTouchMove"
    @mouseup="onTouchEnd">
    <div ref="wrap" class="wrap">
      <figure
        v-for="(item, key) in items"
        :ref="el => { figures[key] = el }"
        :class="[
        (state.active === key && !!state.activeClassName) && state.activeClassName,
        (state.animate === key && !!state.animateClassName) && state.animateClassName,
      ]">
        <img v-if="state.loaded[key]" :src="item.src" :alt="item.title">
        <LoadingUnit v-else class="loading"/>
      </figure>
    </div>
    <i class="overlay"/>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed } from 'vue';
import LoadingUnit from '~/components/Loading/Unit';
import * as util from '~/libs/util';

export default defineComponent({
  name: 'SlidesImages',
  components: {
    LoadingUnit,
  },
  props: {
    initialActive: { type: Number, default: 0 },
    animationType: { type: String, default: null }, // null,'fade','horizontal'
    styleType: { type: String, default: null }, // null,contain,cover
    items: { type: Array, required: true },
    duration: { type: Number, default: 800 }, // ms
    imageSize: { type: String, default: '100%' },
    loop: { type: Boolean },
  },
  setup(props, context)
  {
    let state = reactive({
      loaded: new Array(props.items.length).fill(false),
      active: props.initialActive,
      activeClassName: 'current',
      animate: undefined,
      animateClassName: undefined,
      animated: false,
    });
    let _active = props.initialActive;
    const figures = ref([]);
    const wrap = ref(null);
    let targetElement = null;
    let move = false;

    // set loaded
    state.loaded[props.initialActive] = true;
    if (props.animationType === 'horizontal')
    {
      state.loaded = util.setAreaTrue(state.loaded, props.items.length, props.initialActive, props.loop);
    }

    // methods
    async function play(n = null)
    {
      if (typeof n !== 'number') return;
      removeTransitionEndEvent();
      // set temp active
      _active = Number(n);
      // init image load event
      if (!state.loaded[_active])
      {
        const image = new Image();
        image.onload = () => {
          state.loaded[_active] = true;
        };
        image.src = props.items[_active].src;
      }
      // play motion
      switch (props.animationType)
      {
        case 'fade':
          context.emit('animation-control', true);
          state.animated = true;
          state.activeClassName = 'current ready';
          state.animate = _active;
          state.animateClassName = 'next ready';
          await util.sleep(20);
          state.animateClassName = 'next';
          targetElement = figures.value[_active];
          targetElement.addEventListener('transitionend', onTransitionEnd);
          break;
        case 'horizontal':
          context.emit('animation-control', true);
          state.animated = true;
          state.active = _active;
          wrap.value.addEventListener('transitionend', onTransitionEnd);
          // TODO: The current slide has problems with the first and last slides with `loop=true`.
          // TODO: A phenomenon that cannot be passed from the last to the first occurs.
          // TODO: After analyzing the other slides, the last item before the first and the first item at the end are copied and prepared for animation.
          // TODO: After the animation is over, fix the position value and adjust the last to move to the first and the first to the last.
          // TODO: The first item is placed with `0-100vw`, the last item with `last+100vw`.
          // TODO: If it is burdensome to arrange in a state beyond the area, you can cope with it by increasing it as it is and correcting the `key` value to push the order.
          break;
        default:
          state.active = _active;
          break;
      }
    }
    function onTransitionEnd()
    {
      switch (props.animationType)
      {
        case 'fade':
          state.animate = undefined;
          state.animateClassName = undefined;
          state.active = _active;
          state.activeClassName = 'current';
          break;
        case 'horizontal':
          state.active = _active;
          state.activeClassName = 'current';
          state.loaded = util.setAreaTrue(state.loaded, props.items.length, props.initialActive, props.loop);
          break;
      }
      state.animated = false;
      context.emit('animation-control', false);
      removeTransitionEndEvent();
    }
    function removeTransitionEndEvent()
    {
      if (!targetElement) return;
      targetElement.removeEventListener('transitionend', onTransitionEnd);
      targetElement = null;
    }
    function onTouchStart(e)
    {
      if (props.animationType !== 'horizontal') return;
      move = true;
      // console.log('onTouchStart');
    }
    function onTouchMove(e)
    {
      if (!move) return;
      // console.log('onTouchMove');
    }
    function onTouchEnd(e)
    {
      if (!move) return;
      move = false;
      // console.log('onTouchEnd');
      // TODO: context.emit('change-active')
    }

    return {
      state,
      figures,
      wrap,
      play,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    };
  },
  emits: {
    'animation-control': null,
    'change-active': null,
  },
});
</script>

<style src="./Images.scss" lang="scss" scoped></style>
