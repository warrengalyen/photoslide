<template>
  <fieldset>
    <legend>General fields</legend>
    <div class="fields">
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_name">Name</label>
        </h3>
        <p class="field-description">
          enter a slide title
        </p>
        <div class="field-basic__body">
          <FormText
            name="pref_name"
            id="pref_name"
            placeholder="Please input text"
            v-model="state.name"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_description">Description</label>
        </h3>
        <p class="field-description">
          enter a description for the slide
        </p>
        <div class="field-basic__body">
          <FormText
            type="textarea"
            name="pref_description"
            id="pref_description"
            placeholder="Please input text"
            v-model="state.description"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <hr class="field-line">
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_language">Language</label>
        </h3>
        <p class="field-description">
          set the message language
        </p>
        <div class="field-basic__body">
          <FormSelect
            name="pref_language"
            id="pref_language"
            v-model="state.language"
            @update:modelValue="onSave">
            <option value="en">English</option>
            <option value="en">Korean</option>
          </FormSelect>
        </div>
      </div>
      <hr class="field-line">
      <div class="field-switch">
        <div class="field-switch__body">
          <h3 class="field-title">
            <label for="pref_hud">Visible HUD</label>
          </h3>
          <p class="field-description">
            shows operation and state elements
          </p>
        </div>
        <div class="field-switch__input">
          <FormSwitch
            name="pref_hud"
            id="pref_hud"
            v-model="state.hud"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <div class="field-switch">
        <div class="field-switch__body">
          <h3 class="field-title">
            <label for="pref_hoverVisibleHud">Visible Hover HUD</label>
          </h3>
          <p class="field-description">
            Hide operation and status elements when you move the mouse over the slide area.<br/>
            If you overlay mouse, HUD will be hidden.
          </p>
        </div>
        <div class="field-switch__input">
          <FormSwitch
            name="pref_hoverVisibleHud"
            id="pref_hoverVisibleHud"
            v-model="state.hoverVisibleHud"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_visibleHudContents">Visible HUD Contents</label>
        </h3>
        <p class="field-description">
          Controls the display of each operation and status elements.
        </p>
        <div class="field-basic__body">
          <ul class="field-checks">
            <li>
              <FormCheckbox
                name="pref_hudContents_menu"
                id="pref_hudContents_menu"
                label="Menu"
                :modelValue="state.visibleHudContents.menu"
                @update:modelValue="o => onUpdateHudContents('menu', o)"/>
            </li>
            <li>
              <FormCheckbox
                name="pref_hudContents_thumbnail"
                id="pref_hudContents_thumbnail"
                label="Thumbnail"
                :modelValue="state.visibleHudContents.thumbnail"
                @update:modelValue="o => onUpdateHudContents('thumbnail', o)"/>
            </li>
            <li>
              <FormCheckbox
                name="pref_hudContents_caption"
                id="pref_hudContents_caption"
                label="Caption"
                :modelValue="state.visibleHudContents.caption"
                @update:modelValue="o => onUpdateHudContents('caption', o)"/>
            </li>
            <li>
              <FormCheckbox
                name="pref_hudContents_controller"
                id="pref_hudContents_controller"
                label="Controller"
                :modelValue="state.visibleHudContents.controller"
                @update:modelValue="o => onUpdateHudContents('controller', o)"/>
            </li>
            <li>
              <FormCheckbox
                name="pref_hudContents_paginate"
                id="pref_hudContents_paginate"
                label="Paginate"
                :modelValue="state.visibleHudContents.paginate"
                @update:modelValue="o => onUpdateHudContents('paginate', o)"/>
            </li>
          </ul>
        </div>
      </div>
      <hr class="field-line">
      <div class="field-switch">
        <div class="field-switch__body">
          <h3 class="field-title">
            <label for="pref_useStorage">Using browser storage</label>
          </h3>
          <p class="field-description">
            saves slide data and preferences to the browser
          </p>
        </div>
        <div class="field-switch__input">
          <FormSwitch
            name="pref_useStorage"
            id="pref_useStorage"
            v-model="state.useStorage"
            @update:modelValue="onSave"/>
        </div>
      </div>
      <div class="field-basic">
        <h3 class="field-title">
          <label>Backup & Restore</label>
        </h3>
        <p class="field-description">
          all data of the slideshow is imported or exported
        </p>
        <div class="field-basic__body">
          <div class="grid import-data">
            <div>
              <ButtonBasic
                color="key"
                @click="">
                Backup
              </ButtonBasic>
            </div>
            <div>
              <ButtonBasic
                color="key"
                @click="">
                Restore
              </ButtonBasic>
            </div>
          </div>
        </div>
      </div>

      <div class="field-basic">
        <h3 class="field-title">
          <label>Reset slideshow</label>
        </h3>
        <p class="field-description">
          reset all settings and slide data
        </p>
        <div class="field-basic__body">
          <ButtonBasic
            color="danger"
            @click="">
            Reset slideshow
          </ButtonBasic>
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
import FormCheckbox from '~/components/Form/Checkbox';
import ButtonBasic from '~/components/Button/Basic';

export default defineComponent({
  name: 'PreferenceGeneral',
  components: {
    FormText,
    FormSelect,
    FormSwitch,
    FormCheckbox,
    ButtonBasic,
  },
  props: {
    structure: Object,
  },
  setup(props, context)
  {
    let state = reactive({
      name: props.structure.name,
      description: props.structure.description,
      language: props.structure.language,
      hud: props.structure.hud,
      hoverVisibleHud: props.structure.hoverVisibleHud,
      visibleHudContents: object.convertPureObject(props.structure.visibleHudContents),
    });

    // methods
    function onSave()
    {
      const structure = object.convertPureObject(state);
      context.emit('update', structure);
    }
    function onUpdateHudContents(key, value)
    {
      state.visibleHudContents[key] = value;
      onSave();
    }

    return {
      state,
      onSave,
      onUpdateHudContents,
    };
  },
  emits: {
    'update': null,
  },
});
</script>

<style src="./fieldset.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
@import "../../scss/mixins";
.import-data {
  --column: 1;
  --gap: 10px;
  @include responsive(tablet) {
    --column: 2;
  }
}
.reset {
  margin-top: 16px;
}
</style>
