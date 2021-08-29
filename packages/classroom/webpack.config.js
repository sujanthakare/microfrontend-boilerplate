/* eslint-disable */
const baseWebpack = require('../../webpack.config');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  ...baseWebpack,
  entry: './root.tsx',
  output: {
    publicPath: 'http://localhost:3001/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'classroom',
      library: { type: 'var', name: 'classroom' },
      filename: 'remoteEntry.js',
      exposes: {
        // expose each component
        './classroom': './src/classroom',
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
