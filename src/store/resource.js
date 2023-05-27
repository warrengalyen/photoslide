// defaults
export const defaults = {
  preference: {
    general: {
      name: 'Slideshow',
      description: 'The slideshow description.',
      language: 'en', // en,ko
      hud: true,
      hoverVisibleHud: false,
      visibleHudContents: {
        menu: true,
        thumbnail: true,
        caption: true,
        controller: true,
        paginate: true,
        autoplay: true,
      },
    },
    slides: {
      initialNumber: 0,
      animationType: 'fade', // null,none,fade,horizontal
      animationSpeed: 500,
      captionAnimationType: 'none', // none,shuffle
      captionAnimationSpeed: 40,
      autoplay: false,
      autoplayDelay: 7000,
      autoplayDirection: true, // next(true), prev(false)
      autoplayPauseOnHover: false,
      loop: true,
      swipe: true,
    },
    style: {
      screenColor: 'system', // dark,light,system
      imageType: 'none', // none,contain,cover
      imageScale: ['75%','75%'], // [ width, height ]
      captionScale: 100, // %
      captionPosition: ['32px','30px'], // [ left, top ]
    },
    keyboard: {
      enabled: true,
    },
  },
  slides: [],
  mode: null,
  activeSlide: undefined,
  keyboardEvent: true,
};

// example slides
export const exampleSlides = [
  {
    "src":"https://www.mechanikadesign.com/data/test-images/photoslide/black-and-silver-balls-001.jpg",
    "thumbnail":null,
    "title":"small image",
    "description":"for small images..."
  },
  {
    "src":"https://www.mechanikadesign.com/data/test-images/photoslide/matrix-001-002.jpg",
    "thumbnail":null,
    "title":"cureeent",
    "description":"current description"
  },
  {
    "src":"https://www.mechanikadesign.com/data/test-images/photoslide/hud-tadpole-001.jpg",
    "thumbnail":null,
    "title":"preeev",
    "description":"prevv sdmig sdigfs dmg\nsdmig sdgolp sdgm,"
  },
  {
    "src":"https://www.mechanikadesign.com/data/test-images/photoslide/double-generator-001.jpg",
    "thumbnail":null,
    "title":"neeext",
    "description":"nexxtt description"
  },
  {
    "src":"https://www.mechanikadesign.com/data/test-images/photoslide/circle-body-001.jpg",
    "thumbnail":null,
    "title":"fioooo",
    "description":"nexxtt description"
  },
  {
    "src":"https://www.mechanikadesign.com/data/test-images/photoslide/noise-color-001.jpg",
    "thumbnail":null,
    "title":"barrr",
    "description":"nexxtt description"
  },
  {
    "src":"https://www.mechanikadesign.com/data/test-images/photoslide/2019-09-18_001.jpg",
    "thumbnail":null,
    "title":"choooo",
    "description":"smdopgmspdg\nsd gjsdgp"
  },
  {
    "src":"https://www.mechanikadesign.com/data/test-images/photoslide/triangle-beeple-001.jpg",
    "thumbnail":null,
    "title":"more than hahabo",
    "description":"sdigg msdkgfp smdgp sdgiosdgi sdmg"
  },
  {
    "src":"https://www.mechanikadesign.com/data/test-images/photoslide/horizon-zero-dawn-1.jpg",
    "thumbnail":null,
    "title":"Horizon Zero Dawn",
    "description":"nexxtt description"
  },
];
