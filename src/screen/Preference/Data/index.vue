<template>
  <fieldset>
    <legend>Data fields</legend>
    <div class="fields">
      <div class="field-basic">
        <h3 class="field-title">
          Manage slide data
        </h3>
        <p class="field-description">
          Edit slide data.
        </p>
        <div class="field-basic__body">
          <div class="manage-tree">
            <nav class="manage-tree-toolbar">
              <div>
                <FormRadio
                  type="button"
                  name="pref_mode"
                  id="prof_mode"
                  title="Change the edit mode."
                  :items="[
                  { key: 'basic', label: 'Basic' },
                  { key: 'advanced', label: 'Advanced' },
                ]"
                  :modelValue="localState.mode"
                  @update:model-value="onChangeMode"
                  class="manage-tree__mode"/>
              </div>
              <div>
                <ButtonIcon
                  title="Get slide data."
                  icon-name="download"
                  class="manage-tree__button"/>
              </div>
            </nav>
            <div class="manage-tree-body">
              <Manage
                v-if="localState.mode === 'basic'"
                :tree="state.tree"
                @update="onUpdateTreeUI"/>
              <FormText
                v-else-if="localState.mode === 'advanced'"
                ref="tree"
                type="textarea"
                name="pref_tree"
                id="pref_tree"
                placeholder="Please input slides tree code"
                :rows="12"
                :color="localState.textTreeColor"
                v-model="state.tree"
                @update:modelValue="onUpdateTreeSource"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
import { defineComponent, reactive, computed, watch, ref, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { convertPureObject, checkSlideItems, checkTree } from '~/libs/object';
import FormText from '~/components/Form/Text';
import FormSelect from '~/components/Form/Select';
import FormRadio from '~/components/Form/Radio';
import ButtonIcon from './ButtonIcon';
import Manage from './Manage';
import * as object from "@/libs/object";
export default defineComponent({
  name: 'PreferenceData',
  components: {
    FormText,
    FormSelect,
    FormRadio,
    ButtonIcon,
    Manage,
  },
  props: {
    structure: Object,
  },
  setup(props, context)
  {
    const { t } = useI18n({ useScope: 'global' });
    let localState = reactive({
      mode: 'advanced', // basic,advanced
      textTreeColor: undefined,
      computedTreeText: computed(() => {
        return JSON.stringify(state.tree, null, 2)
      }),
    });
    let state = reactive({
      tree: localState.mode === 'advanced' ? JSON.stringify(props.structure.tree, null, 2) : props.structure.tree,
    });
    let timer;
    // methods
    function onChangeMode(key)
    {
      try
      {
        switch (key)
        {
          case 'basic':
            let tree = JSON.parse(state.tree);
            if (!checkTree(tree)) throw new Error('error tree');
            state.tree = tree;
            localState.mode = key;
            break;
          case 'advanced':
            state.tree = JSON.stringify(state.tree, null, 2);
            localState.mode = key;
            break;
        }
      }
      catch(e)
      {
        if (window.dev) console.warn(e.message);
        alert('tree data is invalid.');
      }
    }
    function onUpdateTreeSource(str)
    {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        try
        {
          let tree = JSON.parse(str);
          localState.textTreeColor = undefined;
          // update parent component
          context.emit('update', { tree });
        }
        catch(e)
        {
          localState.textTreeColor = 'error';
        }
      }, 600);
    }
    function onUpdateTreeUI(tree)
    {
      console.log('call onUpdateTreeUI()');
    }
    return {
      state,
      localState,
      onChangeMode,
      onUpdateTreeSource,
      onUpdateTreeUI,
    };
  },
  emits: {
    'update': null,
  },
});
</script>

<style src="../fieldset.scss" lang="scss" scoped></style>
<style src="./index.scss" lang="scss" scoped></style>
