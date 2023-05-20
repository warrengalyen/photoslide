import defaults from './defaults';

let state = defaults;

// TODO: assign test values - start
state.slides = [
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
];
state.mode = null; // null,thumbnail,preference,guide
state.activeSlide = undefined;
state.keyboardEvent = true;
state.preference.style.screenColor = 'light';
// TODO: assign test values - end

export default state;
