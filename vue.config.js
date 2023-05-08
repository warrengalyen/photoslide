const path = require('path');

const development = process.env.NODE_ENV === 'development';

module.exports = {
  publicPath: './',
  outputDir: 'docs',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      }
    },
  },
  // TODO: It doesn't seem to be used much, but if you do use it a lot, uncomment it.
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: `
  //         @import "~@/scss/mixins";
  //         @import "~@/scss/variables";
  //       `,
  //     },
  //   },
  // },
};
