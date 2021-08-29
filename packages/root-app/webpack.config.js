/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpack = require('../../webpack.config');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  ...baseWebpack,
  entry: './index.tsx',
  output: {
    publicPath: 'http://localhost:3002/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'root-app',
      library: { type: 'var', name: 'root-app' },
      remotes: {
        classroom: 'classroom',
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
