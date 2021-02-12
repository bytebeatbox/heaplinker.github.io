const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const nodeExternals = require('webpack-node-externals');

const config = {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: false,
  },
  entry: './src/server.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
  },
  stats: {
    warningsFilter: [/critical dependency:/i, /module not found:/i],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ids.HashedModuleIdsPlugin({
      context: __dirname,
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/pages/*.html', to: 'public/[name]' },
        { from: 'src/pages/*.css', to: 'public/[name].[ext]' },
        { from: 'src/pages/assets/favicon.ico', to: 'public/[name].[ext]' },
      ],
    }),
    new WebpackManifestPlugin(),
  ],
};
module.exports = config;
