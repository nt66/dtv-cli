const path = require('path');
const webpack = require('webpack');
const webpackConfigBase = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

const webpackConfigDev = {
  mode: 'development',

  entry: {
    app: [resolve('../design/App.tsx')],
  },

  output: {
    path: resolve('../dist'), 
    filename: 'index.js',
  },

  devtool: 'cheap-module-eval-source-map',   

  devServer: {
    contentBase: resolve('../dist'), 
    hot: true,
    open: true,   
    host: 'localhost',
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({template: './design/public/index.html', }),
    new webpack.NamedModulesPlugin(),  
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(webpackConfigBase, webpackConfigDev)