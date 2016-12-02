/**
 * Created by charles on 16/11/21.
 */
var helper = require("./helper");
var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var commonConfig = require("./webpack.common");

module.exports = webpackMerge(commonConfig, {
    devtool: "eval",
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        contentBase: helper.root("dist"),
        compress: true,
        port: 8080,
        hot: true,
        inline: true,
        publicPath: "/"
    }
});