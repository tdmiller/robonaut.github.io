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
    filename: 'js/[name].js',
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
    new webpack.HotModuleReplacementPlugin(),
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
  mode: 'development',
  devtool: 'source-map',
};

const productionConfig = {
  ...configuration,
  mode: 'production',
  devtool: 'none',
};

module.exports =
  process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;
