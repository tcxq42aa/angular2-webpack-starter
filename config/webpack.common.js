/**
 * Created by charles on 16/12/2.
 */
var HtmlWebpackPlugin = require("html-webpack-plugin");
var autoprefixer = require("autoprefixer");
var precss = require("precss");
var webpack = require("webpack");
var helper = require("./helper");

module.exports = {
    output: {
        filename: "[name].[hash].js",
        path: helper.root("dist"),
        publicPath: "/",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            helper.root("src"),
            "node_modules"
        ]
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.ts$/,
                loader: ["awesome-typescript-loader", "angular2-template-loader", "angular2-router-loader?aot=true&genDir=./aot/app"]
            },
            {
                test: /\.js$/,
                loader: ['angular2-template-loader'],
                include: [helper.root('node_modules/ngdui-core'), helper.root('node_modules/ngdui-complex')]
            },
            {
                test: /\.html$/,
                loader: 'html-loader?interpolate&minimize=false'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.css$/,
            options: {
                context: helper.root("src"),
                postcss: [precss, autoprefixer]
            }
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/])
    ]
};