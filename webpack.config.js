var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    context: path.resolve('js'), // sets a relative root directory for the entry key.
    entry: ["./utils.js", "./app.js"],
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/', // directory where bundles will be on the webserver
        filename: "bundle.js"
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    devServer: {
        contentBase: 'public'
    },

    watch: true,
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                //loader: "style-loader!css-loader" // anytime webpack encounters a css file, first run through css-loader then run through style-loader
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                //loader: "style-loader!css-loader!sass-loader"
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
            },
            {
                test: /\.png|jpg$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=5000' // size limit of 100kb. any image below this size is going to be inlined in base64 encoded data
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    }
}