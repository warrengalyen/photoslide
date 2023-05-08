export default {
  preference: {
    general: {
      screenColor: 'system', // dark,light,system
      language: 'en',
      hud: true,
      hoverHud: false,
      visibleElements: {},
    },
    style: {
      imageScale: 75, // %
      imageType: null, // null,contain,cover
      captionScale: 100, // %
      captionMargin: 24, // px
    },
    slides: {
      initialNumber: 0,
      animationType: 'horizontal', // null,fade,horizontal
      animationSpeed: 500,
      autoplay: false,
      autoplayDelay: 3000,
      loop: true,
      swipe: true,
    },
    keyboard: {
      enableShortcut: true,
    },
  },
  slides: [
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
  mode: null, // null,thumbnail,preference
  dev: process.env.NODE_ENV === 'development',
};
