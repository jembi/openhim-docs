const webpack = require('webpack');

// eslint-disable-next-line
module.exports = function (context, options) {
  return {
    name: 'custom-docusaurus-plugin',
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        plugins: [
          // Work around for Buffer is undefined:
          // https://github.com/webpack/changelog-v5/issues/10
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
          })
        ]
      }
    },
  };
};
