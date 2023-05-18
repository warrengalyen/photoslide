<template>
  <fieldset>
    <legend>Slide fields</legend>
    <div class="fields">
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_initialNumber">Initial slide number</label>
        </h3>
        <p class="field-description">
          Slide number to be activated when running for the first time (Number starts from 0)
        </p>
        <div class="field-basic__body">
          <FormText
            type="tel"
            name="pref_initialNumber"
            id="pref_initialNumber"
            v-model="state.initialNumber"
            placeholder="0"
            :inline="true"
            :maxlength="3"
            :size="5"
            model-type="number"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <hr class="field-line">
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_animationType">Animation type</label>
        </h3>
        <p class="field-description">
          select the transition when the slide changes
        </p>
        <div class="field-basic__body">
          <FormSelect
            name="pref_animationType"
            id="pref_animationType"
            v-model="state.animationType"
            @update:modelValue="onSave">
            <option value="none">none</option>
            <option value="fade">fade</option>
            <option value="horizontal">horizontal</option>
          </FormSelect>
        </div>
      </div>
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_animationSpeed">Animation speed</label>
        </h3>
        <p class="field-description">
          adjusts the transition animation speed
        </p>
        <div class="field-basic__inline">
          <label class="label">
            <FormText
              type="tel"
              name="pref_animationSpeed"
              id="pref_animationSpeed"
              v-model="state.animationSpeed"
              placeholder="1000"
              :inline="true"
              :maxlength="4"
              :size="5"
              model-type="number"
              @update:modelValue="onSave"/>
            <span>ms</span>
          </label>
        </div>
      </div>
      <hr class="field-line">
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_captionAnimationType">Caption animation type</label>
        </h3>
        <p class="field-description">
          Select the caption transition when the slide changes.
        </p>
        <div class="field-basic__body">
          <FormSelect
            name="pref_captionAnimationType"
            id="pref_captionAnimationType"
            v-model="state.captionAnimationType"
            @update:modelValue="onSave">
            <option value="none">None</option>
            <option value="shuffle">Shuffle</option>
          </FormSelect>
        </div>
      </div>
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_captionAnimationSpeed">Caption animation speed</label>
        </h3>
        <p class="field-description">
          higher values result in faster animations
        </p>
        <div class="field-basic__inline">
          <FormText
            type="tel"
            name="pref_captionAnimationSpeed"
            id="pref_captionAnimationSpeed"
            v-model="state.captionAnimationSpeed"
            placeholder="1000"
            :inline="true"
            :maxlength="4"
            :size="5"
            model-type="number"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <hr class="field-line">
      <div class="field-switch">
        <div class="field-switch__body">
          <h3 class="field-title">
            <label for="pref_autoplay">Autoplay</label>
          </h3>
          <p class="field-description">
            play slides automatically
          </p>
        </div>
        <div class="field-switch__input">
          <FormSwitch
            name="pref_autoplay"
            id="pref_autoplay"
            v-model="state.autoplay"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_autoplayDelay">Autoplay delay</label>
        </h3>
        <p class="field-description">
          The amount of time the slide waits before automatically transitioning.
        </p>
        <div class="field-basic__inline">
          <label class="label">
            <FormText
              type="tel"
              name="pref_autoplayDelay"
              id="pref_autoplayDelay"
              v-model="state.autoplayDelay"
              placeholder="1000"
              :inline="true"
              :maxlength="4"
              :size="5"
              model-type="number"
              @update:modelValue="onSave"/>
            <span>ms</span>
          </label>
        </div>
      </div>
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_autoplayDirection">Autoplay direction</label>
        </h3>
        <p class="field-description">
          Set the direction in which slides automatically turn.
        </p>
        <div class="field-basic__inline">
          <FormRadio
            name="pref_autoplayDirection"
            id="pref_autoplayDirection"
            :items="[
            { key: false, label: 'Prev' },
            { key: true, label: 'Next' },
          ]"
            model-type="boolean"
            v-model="state.autoplayDirection"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <div class="field-switch">
        <div class="field-switch__body">
          <h3 class="field-title">
            <label for="pref_autoplayPauseOnHover">Autoplay pause on hover</label>
          </h3>
          <p class="field-description">
            Hovering the mouse over the slide area pauses autoplay.
          </p>
        </div>
        <div class="field-switch__input">
          <FormSwitch
            name="pref_autoplayPauseOnHover"
            id="pref_autoplayPauseOnHover"
            v-model="state.autoplayPauseOnHover"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <hr class="field-line">
      <div class="field-switch">
        <div class="field-switch__body">
          <h3 class="field-title">
            <label for="pref_loop">Loop</label>
          </h3>
          <p class="field-description">
            move the slide from last to first
          </p>
        </div>
        <div class="field-switch__input">
          <FormSwitch
            name="pref_loop"
            id="pref_loop"
            v-model="state.loop"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <div class="field-switch">
        <div class="field-switch__body">
          <h3 class="field-title">
            <label for="pref_swipe">Swipe</label>
          </h3>
          <p class="field-description">
            use swipe gestures on touch devices
          </p>
        </div>
        <div class="field-switch__input">
          <FormSwitch
            name="pref_swipe"
            id="pref_swipe"
            v-model="state.swipe"
            @update:modelValue="onSave"/>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import * as object from '~/libs/object';
import FormText from '~/components/Form/Text';
import FormSelect from '~/components/Form/Select';
import FormSwitch from '~/components/Form/Switch';
import FormRadio from '~/components/Form/Radio';

export default defineComponent({
  name: 'PreferenceSlide',
  components: {
    FormText,
    FormSelect,
    FormSwitch,
    FormRadio,
  },
  props: {
    structure: Object,
  },
  setup(props, context)
  {
    let state = reactive({
      initialNumber: props.structure.initialNumber,
      animationType: props.structure.animationType,
      animationSpeed: props.structure.animationSpeed,
      captionAnimationType: props.structure.captionAnimationType,
      captionAnimationSpeed: props.structure.captionAnimationSpeed,
      autoplay: props.structure.autoplay,
      autoplayDelay: props.structure.autoplayDelay,
      autoplayDirection: props.structure.autoplayDirection,
      autoplayPauseOnHover: props.structure.autoplayPauseOnHover,
      loop: props.structure.loop,
      swipe: props.structure.swipe,
    });

    // methods
    function onSave()
    {
      const structure = object.convertPureObject(state);
      context.emit('update', structure);
    }

    return {
      state,
      onSave,
    };
  },
  emits: {
    'update': null,
  },
});
</script>

<style src="./fieldset.scss" lang="scss" scoped></style>
