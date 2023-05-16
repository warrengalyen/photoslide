<template>
  <fieldset>
    <legend>Data fields</legend>
    <div class="fields">
      <div class="field-basic">
        <h3 class="field-title">
          <label for="api_address">API Address</label>
        </h3>
        <div class="field-multiple">
          <div class="field-multiple__body">
            <FormText
              type="text"
              name="api_address"
              id="api_address"
              v-model="state.apiAddress"
              placeholder="https://service.com/filename.json"/>
          </div>
          <div>
            <ButtonBasic
              color="key"
              @click="importDataOnAddress">
              Get data
            </ButtonBasic>
          </div>
        </div>
        <p class="field-description">
          get data through restapi
        </p>
        <div class="field-upload">
          <FormUpload
            accept="application/json"
            @change="importDataOnFile"/>
        </div>
        <p class="field-description">
          import slide data by uploading a json file
        </p>
      </div>
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_description">Edit slide data</label>
        </h3>
        <p class="field-description">
          get data through restapi
        </p>
        <div class="field-basic__body">
          <!-- TODO: If you update data every time you input, error checks occur a lot, so it seems that you need a
          device that actually applies them. -->
          <FormText
            type="textarea"
            name="pref_dataText"
            id="pref_dataText"
            placeholder="Please input JSON code"
            :rows="8"
            v-model="state.dataText"
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
import FormUpload from '~/components/Form/Upload';
import ButtonBasic from '~/components/Button/Basic';

export default defineComponent({
  name: 'PreferenceData',
  components: {
    FormText,
    FormUpload,
    ButtonBasic,
  },
  props: {},
  setup(props, context)
  {
    let state = reactive({
      apiAddress: '',
      dataText: '',
    });

    // methods
    function onSave()
    {
      const structure = object.convertPureObject(state);
      context.emit('update', structure);
    }
    function importDataOnAddress()
    {
      console.log('importDataOnAddress()');
    }
    function importDataOnFile()
    {
      console.log('importDataOnFile()');
    }

    return {
      state,
      onSave,
      importDataOnAddress,
      importDataOnFile,
    };
  },
  emits: {
    'update': null,
  },
});
</script>

<style src="./fieldset.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
.field-multiple {
  display: flex;
  margin: 10px 0 0;
  &__body {
    flex: 1;
    margin-right: 10px;
  }
}
.field-upload {
  margin-top: 20px;
}
</style>
