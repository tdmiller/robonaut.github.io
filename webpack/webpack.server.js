var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

module.exports = options => {
  var defaultOptions = {
    filename: config.output.filename,
    contentBase: './src',
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    open: true,
  };
  return new WebpackDevServer(
    webpack(config),
    Object.assign(defaultOptions, options)
  );
};
