const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const paths = {
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
};

module.exports = () => ({
  entry: path.join(paths.src, 'index.jsx'),
  output: {
    path: paths.dist,
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
