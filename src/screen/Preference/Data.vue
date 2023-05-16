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
              v-model="localState.apiAddress"
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
          <label for="pref_slides">Edit slide data</label>
        </h3>
        <p class="field-description">
          get data through restapi
        </p>
        <div class="field-basic__body">
          <!-- TODO: If you update data every time you input, error checks occur a lot, so it seems that you need a
          device that actually applies them. -->
          <FormText
            type="textarea"
            name="pref_slides"
            id="pref_slides"
            placeholder="Please input slides code"
            :color="state.slidesColor"
            :rows="10"
            v-model="state.slides"
            @update:modelValue="onUpdateSlideSource"/>
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
    let localState = reactive({
      apiAddress: 'http://localhost:3000/foo.json',
      slidesColor: undefined,
    });
    let state = reactive({
      slides: '',
    });
    let timer = undefined;

    // methods
    function onSave()
    {
      const structure = object.convertPureObject(state);
      context.emit('update', structure);
    }
    function importDataOnAddress()
    {
      console.log('importDataOnAddress()', localState.apiAddress);
      try
      {
        if (!localState.apiAddress) throw new Error('no address');
        // TODO: url inspection
        // TODO: http-request
        // TODO: get the values and put them into state slides
        // TODO: checking values with checkslidesource
      }
      catch(e)
      {
        console.error('ERROR:', e);
      }
    }
    function importDataOnFile(files)
    {
      if (!(files && files.length))
      {
        alert('no file selected');
        return;
      }
      const file = files[0];
      const reader = new FileReader();
      reader.onload = e => {
        try
        {
          let json = JSON.parse(String(e.target.result));
          state.slides = JSON.stringify(json, null, 2);
          checkSlideSource();
        }
        catch(e)
        {
          alert('file import failed');
        }
      };
      reader.readAsText(file);
    }
    function onUpdateSlideSource()
    {
      if (timer) clearTimeout(timer);
      onSave();
      timer = setTimeout(checkSlideSource, 1000);
    }
    function checkSlideSource()
    {
      try
      {
        let obj = JSON.parse(state.slides);
        if (!object.checkSlideItems(obj)) throw new Error('error parse');
        state.slidesColor = undefined;
      }
      catch(e)
      {
        state.slidesColor = 'error';
      }
    }

    return {
      state,
      localState,
      onSave,
      importDataOnAddress,
      importDataOnFile,
      onUpdateSlideSource,
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
