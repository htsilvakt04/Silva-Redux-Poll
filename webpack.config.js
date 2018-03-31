let path = require('path');
let HTML = require('html-webpack-plugin');
let webpack = require('webpack');

let config  = {
    entry: [ 'whatwg-fetch', 'babel-polyfill', './app/index.js' ],
    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: 'silva.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new HTML({
            template: './app/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true
    }

};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    );
}

module.exports = config;