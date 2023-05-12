export default {
  preference: {
    general: {
      name: 'Slideshow',
      description: 'slideshow description',
      screenColor: 'light', // dark,light,system
      language: 'en',
      hud: true,
      hoverVisibleContents: false,
      visibleContents: {
        menu: true,
        thumbnail: true,
        caption: true,
        controller: true,
        paginate : true ,
      },
    },
    style: {
      imageScale: ['85%','85%'], // [ width, height ]
      imageType: null, // null,contain,cover
      captionScale: 100, // %
      captionPosition: ['32px','30px'], // [ left, top ]
    },
    slides: {
      initialNumber: 0,
      animationType: 'horizontal', // null,none,fade,horizontal
      animationSpeed: 500,
      animationCaptionType: null, // null,shuffle
      animationCaptionSpeed: 40,
      autoplay: false,
      autoplayDelay: 3000,
      autoplayDirection: true, // next(true), prev(false)
      autoplayPauseOnHover: false,
      loop: true,
      swipe: true,
    },
    keyboard: {
      enable: true,
    },
  },
  slides: [
    {
      src: 'https://www.mechanikadesign.com/data/test-images/photoslide/black-and-silver-balls-001.jpg',
      thumbnail: null,
      title: 'small image',
      description : 'for small images...' ,
    },
    {
      src: 'https://www.mechanikadesign.com/data/test-images/photoslide/matrix-001-002.jpg',
      thumbnail: null,
      title: 'cureeent',
      description: 'current description',
    },
    {
      src: 'https://www.mechanikadesign.com/data/test-images/photoslide/hud-tadpole-001.jpg',
      thumbnail: null,
      title: 'preeev',
      description: 'prevv sdmig sdigfs dmg\nsdmig sdgolp sdgm,',
    },
    {
      src: 'https://www.mechanikadesign.com/data/test-images/photoslide/double-generator-001.jpg',
      thumbnail: null,
      title: 'neeext',
      description: 'nexxtt description',
    },
    {
      src: 'https://www.mechanikadesign.com/data/test-images/photoslide/circle-body-001.jpg',
      thumbnail: null,
      title: 'fioooo',
      description: 'nexxtt description',
    },
    {
      src: 'https://www.mechanikadesign.com/data/test-images/photoslide/noise-color-001.jpg',
      thumbnail: null,
      title: 'barrr',
      description: 'nexxtt description',
    },
    {
      src: 'https://www.mechanikadesign.com/data/test-images/photoslide/2019-09-18_001.jpg',
      thumbnail: null,
      title: 'choooo',
      description: 'smdopgmspdg\nsd gjsdgp',
    },
    {
      src: 'https://www.mechanikadesign.com/data/test-images/photoslide/triangle-beeple-001.jpg',
      thumbnail: null,
      title : 'more than hahabo' ,
      description: 'sdigg msdkgfp smdgp sdgiosdgi sdmg',
    },
    {
      src: 'https://www.mechanikadesign.com/data/test-images/photoslide/horizon-zero-dawn-1.jpg',
      thumbnail: null,
      title: 'Horizon Zero Dawn',
      description : 'nexxtt description',
    },
  ],
  mode: null, // null,thumbnail,preference
  activeSlide: undefined,
  dev: process.env.NODE_ENV === 'development', // TODO: You can delete it if you don't use it.
};
