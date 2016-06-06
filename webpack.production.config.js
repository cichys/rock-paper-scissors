const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'cheap-source-map',
    entry: [
        path.resolve(__dirname, 'app/main.jsx'),
    ],
    output: {
        path: `${__dirname}/build`,
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            include: path.resolve(__dirname, 'app'),
            loader: 'style-loader!css-loader'
        }, {
            test: /\.js[x]?$/,
            include: path.resolve(__dirname, 'app'),
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([
            { from: './app/index.html', to: 'index.html' },
            { from: './app/main.css', to: 'main.css' },
            { from: './app/assets/', to: 'assets' }
        ]),
    ]
};
