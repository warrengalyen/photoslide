<template>
  <fieldset>
    <legend>Keyboard fields</legend>
    <div class="fields">
      <div class="field-switch">
        <div class="field-switch__body">
          <h3 class="field-title">
            <label for="pref_enabled">Enabled shortcut</label>
          </h3>
          <p class="field-description">
            use keyboard shortcuts
          </p>
        </div>
        <div class="field-switch__input">
          <FormSwitch
            name="pref_enabled"
            id="pref_enabled"
            v-model="state.enabled"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <hr class="field-line">
    </div>

    <section class="keyboard-guide">
      <header class="keyboard-guide__header">
        <h3>Keyboard guide</h3>
        <p>As before, pressing the keyboard shortcut activates the corresponding function.</p>
      </header>
      <table class="keyboard-guide__body">
        <thead>
        <tr>
          <th>Shortcut key</th>
          <td>Description</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th><code>Left</code></th>
          <td>go to previous slide</td>
        </tr>
        <tr>
          <th><code>Right</code></th>
          <td>go to next slide</td>
        </tr>
        <tr>
          <th><code>A</code></th>
          <td>auto play</td>
        </tr>
        <tr>
          <th><code>S</code></th>
          <td>preferences</td>
        </tr>
        <tr>
          <th><code>T</code></th>
          <td>thumbnail image list screen</td>
        </tr>
        <tr>
          <th><code>R</code></th>
          <td>redo slide</td>
        </tr>
        <tr>
          <th><code>H</code></th>
          <td>show all hud elements</td>
        </tr>
        </tbody>
      </table>
    </section>
  </fieldset>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import * as object from '~/libs/object';
import FormSwitch from '~/components/Form/Switch';

export default defineComponent({
  name: 'PreferenceKeyboard',
  components: {
    FormSwitch,
  },
  props: {
    structure: Object,
  },
  setup(props, context)
  {
    let state = reactive({
      enabled: props.structure.enabled,
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
});
</script>

<style src="./fieldset.scss" lang="scss" scoped></style>
<style src="./Keyboard.scss" lang="scss" scoped></style>
