require('@babel/register');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Resume = require('../src/resume');
const resumeData = require('../resume.json');

const { app, style } = Resume.renderHtml(resumeData);

const configuration = {
  entry: {
    app: ['./src/index.js'],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(antd)\/).*/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Robonaut',
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      app,
      style,
      inject: true,
    }),
  ],
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    extensions: ['.web.js', '.js', '.jsx'],
  },
  target: 'web',
};

const developmentConfig = {
  ...configuration,
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      './src/index.js',
    ],
  },
  output: {
    ...configuration.output,
    filename: 'js/[name].[hash].js',
  },
  plugins: [...configuration.plugins, new webpack.HotModuleReplacementPlugin()],
  mode: 'development',
  devtool: 'source-map',
};

const productionConfig = {
  ...configuration,
  mode: 'production',
  output: {
    ...configuration.output,
    filename: 'js/[name].[contenthash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports =
  process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;
