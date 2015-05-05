var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './index',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        loader: 'babel-loader?stage=0&optional=runtime',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /^my-project/,
      path.resolve(__dirname, '../modules')
    ),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    })
  ]
};
