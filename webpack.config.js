const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            { test: /\.( gif | png | jpe ? g | svg )$/, use: 'image-webpack-loader' },
            { test: /\.ttf$/,
                use: [
                    {
                        loader: 'ttf-loader',
                        options: {
                            name: './theme/font/[hash].[ext]',
                        },
                    },
                ] }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};
