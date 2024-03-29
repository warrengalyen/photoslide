<template>
  <form class="import-data" @submit="onSubmit">
    <fieldset>
      <legend>Import data fields</legend>
      <div class="fields">
        <div class="field-basic">
          <div class="field-basic__body">
            <FormRadio
              name="pref_mode"
              id="prof_mode"
              :title="$t('preference.data.importData.mode.description')"
              :items="[
              { key: 'address', label: $t('preference.data.importData.mode.label_address') },
              { key: 'file', label: $t('preference.data.importData.mode.label_file') },
            ]"
              v-model="state.mode"/>
          </div>
        </div>
        <div v-if="state.mode === 'address'" class="field-basic">
          <h3 class="field-title">
            <label for="pref_address">
              {{$t('preference.data.importData.address.title')}}
            </label>
          </h3>
          <p class="field-description">
            {{$t('preference.data.importData.address.description')}}
          </p>
          <div class="field-basic__body">
            <FormText
              ref="address"
              name="pref_address"
              id="pref_address"
              placeholder="Please input address"
              v-model="state.address"/>
          </div>
        </div>
        <div v-if="state.mode === 'file'" class="field-basic">
          <h3 class="field-title">
            <label for="pref_address">
              {{$t('preference.data.importData.file.title')}}
            </label>
          </h3>
          <p class="field-description">
            {{$t('preference.data.importData.file.description')}}
          </p>
          <div class="field-basic__body">
            <FormUpload
              ref="file"
              accept="application/json"
              :label="$t('preference.data.importData.file.placeholder')"
              @change="onSelectFile"/>
          </div>
        </div>
      </div>
      <nav class="submit-buttons">
        <div>
          <ButtonBasic
            type="submit"
            :color="state.processing ? '' : 'key'"
            :disabled="state.processing"
            :inline="true">
            {{state.processing ? $t('preference.data.importData.submit.processing') : $t('preference.data.importData.submit.getData')}}
          </ButtonBasic>
        </div>
      </nav>
    </fieldset>
  </form>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { getApiData, getFileData } from '~/libs/util';
import { checkTree } from '~/libs/object';
import FormRadio from '~/components/Form/Radio';
import FormText from '~/components/Form/Text';
import FormUpload from '~/components/Form/Upload';
import ButtonBasic from '~/components/Button/Basic';
export default defineComponent({
  name: 'preference-data-import-data',
  components: {
    FormRadio,
    FormText,
    FormUpload,
    ButtonBasic,
  },
  setup(props, context)
  {
    const { t } = useI18n({ useScope: 'global' });
    let state = reactive({
      mode: 'address', // address,file
      address: 'https://raw.githubusercontent.com/warrengalyen/photoslide/master/resource/example/tree.json',
      file: null,
      processing: false,
    });
    const address = ref(null);
    const file = ref(null);
    // methods
    function onSelectFile(e)
    {
      if (e[0]) state.file = e[0];
    }
    async function onSubmit(e)
    {
      e.preventDefault();
      state.processing = true;
      try
      {
        let res;
        switch (state.mode)
        {
          case 'address':
            if (!state.address)
            {
              address.value.focus();
              throw new Error('no address');
            }
            res = await getApiData(state.address);
            break;
          case 'file':
            if (!state.file)
            {
              file.value.focus();
              throw new Error('no file');
            }
            res = await getFileData(state.file);
            break;
          default:
            throw new Error('no mode');
        }
        checkTree(res);
        context.emit('update', res);
        state.processing = false;
      }
      catch(e)
      {
        if (window.dev) console.error(e.message);
        alert(t('preference.data.alerts.failedGetData'));
        state.processing = false;
      }
    }
    return {
      state,
      address,
      file,
      onSelectFile,
      onSubmit,
    };
  },
  emits: {
    'update': null,
  },
});
</script>

<style src="../fieldset.scss" lang="scss" scoped></style>
