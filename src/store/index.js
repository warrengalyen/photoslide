import { createStore } from 'vuex';

// state
const state = {
  preference: {
    general: {},
    style: {},
    slide: {},
    keyboard: {
      enableShortcut: true,
    },
  },
  slides: {
    index: [
      {
        src: 'https://www.mechanikadesign.com/data/test-images/photoslide/matrix-001-002.jpg',
        title: 'cureeent',
        description: 'current description',
      },
      {
        src: 'https://www.mechanikadesign.com/data/test-images/photoslide/hud-tadpole-001.jpg',
        title: 'preeev',
        description: 'prevv description',
      },
      {
        src: 'https://www.mechanikadesign.com/data/test-images/photoslide/double-generator-001.jpg',
        title: 'neeext',
        description: 'nexxtt description',
      },
      {
        src: 'https://www.mechanikadesign.com/data/test-images/photoslide/circle-body-001.jpg',
        title: 'fioooo',
        description: 'nexxtt description',
      },
      {
        src: 'https://www.mechanikadesign.com/data/test-images/photoslide/noise-color-001.jpg',
        title: 'barrr',
        description: 'nexxtt description',
      },
      {
        src: 'https://www.mechanikadesign.com/data/test-images/photoslide/2019-09-18_001.jpg',
        title: 'choooo',
        description: 'smdopgmspdg\nsd gjsdgp',
      },
    ],
    active: 0,
  },
  mode: null, // null,thumbnail,preference
  dev: process.env.NODE_ENV === 'development',
};

// mutations
const mutations = {
  changeMode(state, value)
  {
    state.mode = value;
  },
  changeSlideActive(state, value)
  {
    let infinite = true; // TODO: If infinite play is `true' in the options, it returns to 0 at the end, otherwise it stops.
    if (state.slides.index.length - 1 < value)
    {
      if (!infinite) return;
      state.slides.active = 0;
    }
    else if (value < 0)
    {
      if (!infinite) return;
      state.slides.active = state.slides.index.length - 1;
    }
    else
    {
      state.slides.active = Number(value);
    }
  },
  updatePreference(state, value)
  {
    // TODO
  }
};

// actions
const actions = {
  /**
   * change mode
   * Change content mode
   */
  changeMode(context, value)
  {
    let mode = null;
    switch (value)
    {
      case 'thumbnail':
      case 'preference':
        mode = value;
        break;
    }
    context.commit('changeMode', mode);
  },
  /**
   * update preference
   */
  updatePreference(context, newValue)
  {
    // TODO
  }
};

export default createStore({
  state,
  mutations,
  actions,
});
