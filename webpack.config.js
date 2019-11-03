const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode:'none',

  entry: {
    app: path.resolve(__dirname, 'src/frontend/index.js')
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname,'src/main/resources/static'),
  },

  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:['babel-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/,
          loader: 'url-loader',
          options: {
              publicPath : '/static/',
              name : 'images/[name].[ext]',
              limit : 1
          }
      },
      {
          test: /\.ico$/,
          loader: 'file-loader',
          options: {
              publicPath : '/static/',
              name : 'icons/[name].[ext]',
              limit : 1
          }
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
              publicPath : '/static/',
              name : 'fonts/[name].[ext]',
              limit : 1
          }
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
        _ : "lodash"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin()
  ]
};
 
module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    return webpackMerge(config, require(`./webpack.dev.config.js`))
  }else if (argv.mode === 'production') {
    return webpackMerge(config, require(`./webpack.prod.config.js`))        
  }

  return config;
}
