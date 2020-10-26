const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    'scholars-embed.min': './src/index.ts',
    'vendor-bundle.min': [
      path.resolve(__dirname, './src/vendor/badge.js'),
      path.resolve(__dirname, './src/vendor/embed.js'),
      'jquery',
      'popper.js',
      'bootstrap'
    ]
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
          output: {
            comments: false
          }
        },
        include: /\.min\.js$/,
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './node_modules/bootstrap/dist/css/bootstrap.min.css',
          to: './bootstrap.min.css'
        }
      ]
    })
  ]
};

