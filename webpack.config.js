var webpack = require('webpack');
module.exports = { 
  entry:"recipe.js",
  target: 'node',
  output: {
    filename: "recipe.out.js",
    library: ["exports", "handler"],
    libraryTarget: 'assign'
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader'
      }]
  }
};
