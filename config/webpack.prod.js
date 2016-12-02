/**
 * Created by charles on 16/12/2.
 */
var helper = require("./helper");
var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var commonConfig = require("./webpack.common");
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin("assets/[name].[hash].css");

module.exports = webpackMerge(commonConfig, {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main-aot.ts'
    },
    module: {
      rules: [
          {
              test: /\.css$/i,
              loader: extractCSS.extract({
                  fallbackLoader: "style-loader",
                  loader: [
                      {
                          loader: "css-loader"
                      },
                      {
                          loader: "postcss-loader"
                      }
                  ]
              })
          }
      ]
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            output: {
                comments: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        extractCSS
    ]
});