<template>
  <fieldset>
    <legend>Keyboard fields</legend>
    <div className="fields">
      <div className="field-switch">
        <div className="field-switch__body">
          <h3 className="field-title">
            <label htmlFor="pref_enabled">
              {{ $t('preference.keyboard.enabled.title') }}
            </label>
          </h3>
          <p className="field-description">
            {{ $t('preference.keyboard.enabled.description') }}
          </p>
        </div>
        <div className="field-switch__input">
          <FormSwitch
            name="pref_enabled"
            id="pref_enabled"
            v-model="state.enabled"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <hr className="field-line">
    </div>

    <section className="keyboard-guide">
      <header className="keyboard-guide__header">
        <h3>
          {{ $t('preference.keyboard.guide.title') }}
        </h3>
        <p>
          {{ $t('preference.keyboard.guide.description') }}
        </p>
      </header>
      <table className="keyboard-guide__body">
        <thead>
        <tr>
          <th>
            {{ $t('preference.keyboard.guide.table.head_key') }}
          </th>
          <td>
            {{ $t('preference.keyboard.guide.table.head_description') }}
          </td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>
            <code>
              {{ $t('preference.keyboard.guide.table.body_leftKey') }}
            </code>
          </th>
          <td>
            {{ $t('preference.keyboard.guide.table.body_leftDescription') }}
          </td>
        </tr>
        <tr>
          <th>
            <code>
              {{ $t('preference.keyboard.guide.table.body_rightKey') }}
            </code>
          </th>
          <td>
            {{ $t('preference.keyboard.guide.table.body_rightDescription') }}
          </td>
        </tr>
        <tr>
          <th><code>A</code></th>
          <td>
            {{ $t('preference.keyboard.guide.table.body_autoplayDescription') }}
          </td>
        </tr>
        <tr>
          <th><code>S</code></th>
          <td>
            {{ $t('preference.keyboard.guide.table.body_preferenceDescription') }}
          </td>
        </tr>
        <tr>
          <th><code>T</code></th>
          <td>
            {{ $t('preference.keyboard.guide.table.body_thumbnailDescription') }}
          </td>
        </tr>
        <tr>
          <th><code>R</code></th>
          <td>
            {{ $t('preference.keyboard.guide.table.body_restartDescription') }}
          </td>
        </tr>
        <tr>
          <th><code>H</code></th>
          <td>
            {{ $t('preference.keyboard.guide.table.body_hudDescription') }}
          </td>
        </tr>
        </tbody>
      </table>
    </section>
  </fieldset>
</template>

<script>
import {defineComponent, reactive} from 'vue';
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
  setup(props, context) {
    let state = reactive({
      enabled: props.structure.enabled,
    });

    // methods
    function onSave() {
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
