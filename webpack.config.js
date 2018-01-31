var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      use: [
        {
          loader: "awesome-typescript-loader"
        },
      ],
      include: path.join(__dirname, 'src')
    },
    {
      test: /(\.css|\.scss|\.sass)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              require('autoprefixer')
            ],
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, 'src', 'scss')],
            sourceMap: true
          }
        }
      ]
    }]
  }
};
