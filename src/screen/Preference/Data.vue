<template>
  <fieldset>
    <legend>Data fields</legend>
    <div class="fields">
      <div class="field-basic">
        <h3 class="field-title">
          <label for="pref_slides">
            {{$t('preference.data.slides.title')}}
          </label>
        </h3>
        <p class="field-description">
          {{$t('preference.data.slides.description')}}
        </p>
        <div class="field-basic__body">
          <FormText
            ref="textSlides"
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
      <div class="field-basic">
        <h3 class="field-title">
          <label for="apiAddress">
            {{$t('preference.data.importSlidesData.title')}}
          </label>
        </h3>
        <p class="field-description">
          {{$t('preference.data.importSlidesData.description')}}
        </p>
        <div class="field-multiple">
          <div class="field-multiple__body">
            <FormText
              ref="textApiAddress"
              type="text"
              name="apiAddress"
              id="apiAddress"
              :disabled="localState.apiAddressDisableButton"
              v-model="localState.apiAddress"
              placeholder="https://service.com/filename.json"
              @keydown.enter="importDataOnAddress"/>
          </div>
          <div>
            <ButtonBasic
              color="key"
              :disabled="localState.apiAddressDisableButton"
              @click="importDataOnAddress">
              {{$t('preference.data.importSlidesData.label_getData')}}
            </ButtonBasic>
          </div>
        </div>
        <p class="field-description">
          get data through restapi
        </p>
        <div class="field-upload">
          <FormUpload
            ref="fileUpload"
            accept="application/json"
            @change="importDataOnFile"/>
        </div>
        <p class="field-description">
          {{$t('preference.data.importSlidesData.desc_file')}}
        </p>
      </div>
    </div>
  </fieldset>
</template>

<script>
import { defineComponent, reactive, ref, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import * as object from '~/libs/object';
import * as string from '~/libs/string';
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
  props: {
    structure: Object,
  },
  setup(props, context)
  {
    const { t } = useI18n({ useScope: 'global' });
    let localState = reactive({
      apiAddress: 'https://raw.githubusercontent.com/warrengalyen/photoslide/master/src/example.json',
      apiAddressDisableButton: false,
      slidesColor: undefined,
    });
    let state = reactive({
      slides: props.structure.slides,
    });
    const textSlides = ref(null);
    const textApiAddress = ref(null);
    const fileUpload = ref(null);
    let timer = undefined;

    // methods
    function onSave()
    {
      const structure = object.convertPureObject(state);
      context.emit('update', structure);
    }
    function importDataOnAddress(e)
    {
      if (e) e.preventDefault();
      function error()
      {
        alert(t('preference.data.alerts.failedGetData'));
        localState.apiAddressDisableButton = false;
        nextTick().then(() => textApiAddress.value.focus());
      }

      try
      {
        localState.apiAddressDisableButton = true;
        if (!localState.apiAddress) throw new Error('no address');
        if (!string.validUrl(localState.apiAddress)) throw new Error('wrong url');
        const httpRequest = new XMLHttpRequest();
        if (!httpRequest) throw new Error('no XMLHttpRequest');
        httpRequest.onreadystatechange = () => {
          if (httpRequest.readyState !== XMLHttpRequest.DONE) return;
          try
          {
            if (httpRequest.status === 200)
            {
              JSON.parse(httpRequest.responseText);
              state.slides = httpRequest.responseText;
              checkSlideSource();
              onSave();
              localState.apiAddressDisableButton = false;
              textSlides.value.focus();
            }
            else
            {
              throw new Error('failed request url');
            }
          }
          catch(e)
          {
            error();
          }
        }
        httpRequest.open('get', localState.apiAddress);
        httpRequest.send();
      }
      catch(e)
      {
        error();
      }
    }
    function importDataOnFile(files)
    {
      if (!(files && files.length))
      {
        alert(t('preference.data.alerts.noSelectedFile'));
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
          textSlides.value.focus();
        }
        catch(e)
        {
          alert(t('preference.data.alerts.failedGetFile'));
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
      textSlides,
      textApiAddress,
      fileUpload,
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
