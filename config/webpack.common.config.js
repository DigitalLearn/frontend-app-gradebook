// This is the common Webpack config. The dev and prod Webpack configs both
// inherit config defined here.
const path = require('path');

module.exports = {
  entry: {
    segment: path.resolve(__dirname, '../src/segment.js'),
    app: path.resolve(__dirname, '../src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
