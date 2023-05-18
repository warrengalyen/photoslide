export default {
  preference: {
    general: {
      name: 'Photoslide',
      description: 'slideshow description',
      language: 'en', // en,ko
      hud: true,
      hoverVisibleHud: false,
      visibleHudContents: {
        menu: true,
        thumbnail: true,
        caption: true,
        controller: true,
        paginate: true,
      },
      useStorage: true,
    },
    slides: {
      initialNumber: 0,
      animationType: 'horizontal', // null,none,fade,horizontal
      animationSpeed: 500,
      captionAnimationType: 'none', // none,shuffle
      captionAnimationSpeed: 40,
      autoplay: false,
      autoplayDelay: 3000,
      autoplayDirection: true, // next(true), prev(false)
      autoplayPauseOnHover: false,
      loop: true,
      swipe: true,
    },
    style: {
      screenColor: 'light', // dark,light,system
      imageType: 'none', // none,contain,cover
      imageScale: ['85%','85%'], // [ width, height ]
      captionScale: 100, // %
      captionPosition: ['32px','30px'], // [ left, top ]
    },
    keyboard: {
      enabled: true,
    },
  },
  slides: [],
};
